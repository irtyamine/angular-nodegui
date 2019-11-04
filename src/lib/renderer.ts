import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2
} from '@angular/core';
import { QMainWindow, NativeEvent } from '@nodegui/nodegui';
import { QWindowService } from './window';
import { NgWindow } from './components/window';
import { NgComponent } from './components/component';
import { ComponentsMap, NgComponentClass } from './components/components-map';
import { TextField } from './components/nodes';

@Injectable()
export class NodeguiRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor(
    private readonly windowService: QWindowService,
    components: ComponentsMap
  ) {
    this.renderer = new NodeguiRenderer(windowService, components);
  }

  end() {
    this.windowService.window.show();
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    if (type) {
      hostElement.setStyleSheet(type.styles);
    }
    return this.renderer;
  }
}

export class NodeguiRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  readonly componentsMap: Map<string, NgComponentClass>;
  destroyNode: ((node: any) => void) | null;

  constructor(
    private readonly window: QWindowService,
    components: ComponentsMap
  ) {
    this.componentsMap = components.map;
  }

  createElement(name: string, namespace?: string | null): any {
    const Component = this.componentsMap.get(name);
    if (Component) {
      return new Component();
    } else {
      // TODO create widget with name, may be custom component
      console.warn(`${name} component is not find in components map`);
    }
  }

  createText(value: string): any {
    return new TextField(value);
  }

  selectRootElement(): any {
    return this.window.window;
  }

  addClass(el: any, name: string): void {
    console.log(el, name);
  }

  appendChild(parent: NgComponent, newChild: any): void {
    if (newChild) {
      if (parent instanceof QMainWindow && newChild instanceof NgWindow) {
        newChild.parent = parent;
        this.window.centralWidget.setLayout(newChild);
        this.window.window.setCentralWidget(this.window.centralWidget);
      } else {
        parent.appendChild(newChild);
      }
    }
  }

  createComment(value: string): any {}

  destroy(): void {}

  insertBefore(parent: NgComponent, newChild: any, refChild: any): void {
    parent.insertBefore(newChild, refChild);
  }

  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    const callbackFunc = (e: NativeEvent) => callback.call(target, e);

    target.addEventListener(eventName, callbackFunc);

    return () => target.removeEventListener(eventName, callbackFunc);
  }

  nextSibling(node: any): any {
    console.log('nextSibling');
  }

  parentNode(node: any): any {}

  removeAttribute(
    el: NgComponent,
    name: string,
    namespace?: string | null
  ): void {
    el.removeAttribute(name, namespace);
  }

  removeChild(parent: NgComponent, oldChild: any): void {
    parent.removeChild(oldChild);
  }

  removeClass(el: NgComponent, name: string): void {
    el.removeClass(name);
  }

  removeStyle(
    el: NgComponent,
    style: string,
    flags?: RendererStyleFlags2
  ): void {
    el.removeStyle(style, flags);
  }

  setAttribute(
    el: NgComponent,
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    if (el instanceof QMainWindow) {
      console.log(`${QMainWindow.name} name = ${value}`);
    } else {
      el.setNgAttribute(name, value, namespace);
    }
  }

  setProperty(el: NgComponent, name: string, value: any): void {
    el.setProperty(name, value);
  }

  setStyle(
    el: NgComponent,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    console.log('setStyle', style);

    el.setStyle(style, value, flags);
  }

  setValue(node: NgComponent, value: string): void {
    node.setValue(value);
  }
}
