import { unref, Ref, ComponentInternalInstance } from 'vue'

export function createCanvas(opt){
	return new Canvas()
}

class Canvas {

	public _el: HTMLCanvasElement

	constructor(
		private root: ComponentInternalInstance
	){

	}

	get rootComponent(){
		return this.root
	}

	get el(){
		return this._el
	}

	get context(){
		return this._el.getContext('2d')
	}

	draw(){

	}

}


