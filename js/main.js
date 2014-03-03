
window.AppNamespace = window.AppNamespace || {};

AppNamespace.home = function () {
  var viewModel = {
    message: ko.observable('Welcome!'),
    name: ko.observable(''),
    sayHello: function () {
      this.message("Hello " + this.name() + '!');
    },
    greet: function () {
      AppNamespace.app.navigate("greeting");
    }
  };
  return viewModel;
};

  AppNamespace.greeting = function (params) {
      var viewModel = {
          message: 'Hello!',
      };
      return viewModel;
  };

$(function () {

  AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
      navigationType: "navbar",
      navigation: [
          {
          title: "Home",
          action: "#home",
          icon: "home"
          },
          {
          title: "About",
          action: "#about",
          icon: "info"
          }
      ],
      namespace: AppNamespace
  });

  AppNamespace.app.router.register(":view", { view: "home" });
  AppNamespace.app.navigate();
});

