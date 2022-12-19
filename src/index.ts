import { Block, renderDOM, registerComponent }  from './core';

// import './app.css';

// import Button from './components/button';
// import Link from './components/link';
// import Input from './components/input';
// import Layout from './components/layout';

// registerComponent(Button);
// registerComponent(Link);
// registerComponent(Input);
// registerComponent(Layout);

// // TODO: // Добавить MyComponent

class MyComponent extends Block {
    render() {
        return `
            <div>MY COMPONENT</div>
        `
    }
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new MyComponent());
});
