/**
 * 引入组件
 */
import Header from './header';
import Footer from './footer';

const hview = {
  hHeader: Header,
	hFooter: Footer
};

const install = Vue => {
	Object.keys(hview).forEach(key => Vue.component(key, hview[key]));

	//Vue.prototype.$Dialog = Dialog;
	//Vue.prototype.$Message = Message;
};

if(typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default Object.assign(hview, {
	install
});