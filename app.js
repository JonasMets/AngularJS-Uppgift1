var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", { 
        templateUrl: "views/home.html",
        controller: "homeController" 
    })
    .when("/products", { 
        templateUrl: "views/products.html",
        controller: "defaultController" 
    })
    .when("/about", { 
        templateUrl: "views/about.html",
        controller: "defaultController" 
    })
    .when("/contact", { 
        templateUrl: "views/contact.html",
        controller: "defaultController" 
    })
    .when("/cart", { 
        templateUrl: "views/cart.html",
        controller: "defaultController" 
    })
    .when("/finddealer", { 
        templateUrl: "views/finddealer.html",
        controller: "defaultController" 
    })
    .when("/privacypolicy", { 
        templateUrl: "views/privacypolicy.html",
        controller: "defaultController" 
    })
    .otherwise({redirectTo: '/home'})
})

// 


app.controller("defaultController", function($scope) {
    $scope.testamonials = [
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
    ]
})


app.controller("homeController", function($scope) {
  $scope.homeContent = { image1: "/images/ThorSki_6.png",
  promotext1:"The new ski from",
  brandname:"THOR",
  Philosophytitle: "Our Philosophy", 
  Philosophytext: "Our skis is about that second relationship where you do everything better. Much better.  We knew there was much more that could be done to ski design. With this new ski we explore many of the ideas that never fit into a established category in the industry.  We make the great skis for freeriding. Everywhere. With the least impact on nature.  We believe in equality. We don't make skis for men. We don't make skis for women.",
  Philosophytextstrong:"We make skis for skiers." }
  
  
})


// DIRECTIVES = Partial Views
// app.directive("appheader", function() {
//     return {
//         template: '<header><nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Overview <span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!products">Products</a></li><li class="nav-item"><a class="nav-link" href="#!contact">Contact</a> </li> </ul></div></div></nav></header>'
//     }
// })


app.directive('appheader',[function () {
    return{
      // E = element A=attribute
      restrict: 'EA',
      scope: {
    //   ninjas: '=',
    //   title: '='
      },
      templateUrl:'views/header.html',
      transclude: true,
      replace:true,
      controller: function ($scope) {
        // 
      }
  
    };
  
  }]);


// app.directive("appfooter", function() {
//     return {
//         template: '<footer class="container">&copy; 2020 EPN Sverige AB.</footer>'
//     }
// })
app.directive('appfooter',[function () {
    return{
      // E = element A=attribute
      restrict: 'EA',
      scope: {
    //   ninjas: '=',
    //   title: '='
      },
      templateUrl:'views/footer.html',
      transclude: true,
      replace:true,
      controller: function ($scope) {
        // 
      }
  
    };
  
  }]);



