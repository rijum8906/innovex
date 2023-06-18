const {
	router
} = require("@innovex/core");
const Component = require("./components.js");


const Router = new router();

Router.link(Component);
Router.add({
	path: "/",
	component: "homeComponent"
});


module.exports = Router;