const {
	component
} = require("@innovex/core");


const Component = new component();

Component.add({
	name: "homeComponent",
	htmlFilePath: "component/index.html"
});

module.exports = Component;