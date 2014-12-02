'use strict';

define(['angular', 'services','Isotope', 'classie', 'firebase'], function (angular, services, Isotope, classie, firebase) {

	/* Controllers */
	
	return angular.module('immersive.controllers', ['immersive.services'])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', 'version','$http','ergastAPIservice', function ($scope, version, $http, ergastAPIservice) {
           var init = function(){
               $scope.mainBodyControl();

            };

			$scope.scopedAppVersion = version;
            $scope.mainBodyControl = function () {
                $http({
                    method: 'GET',
                    url: '?json=get_posts'
                })
                .success(function (data) {
                    $scope.posts = data.posts;
                    console.log(data.posts);
                  //  $scope.heroImg(data.posts);
                    setTimeout(function () {

                        $('.flipper .front').click(function () {
                            $(this).parents('.flipper').addClass('flip-r');
                        });
                        $('.back').click(function () {
                            $(this).parents('.flipper').removeClass('flip-r');
                        });
                    }, 500);

                }).error(function () {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            };
            // ************ Filters ************* //
            $scope.filter = function($iso) {

                $('#posts-filter a').click(function (e) {
                    e.preventDefault();
                    var filterValue = $(this).attr('data-filter');
                    // use filter function if value matches
                    //filterValue = filterFns[filterValue] || filterValue;
                    $iso.arrange({ filter: filterValue });
                });
                // ************ Search ************* //
                $('#isotopeSearch').bind('keyup', function () {
                    isotopeSearch($(this).val().toLowerCase());
                });
                // ************ isotope Search  ************* //
                function isotopeSearch( kwd) {

                    if ((kwd != '') && (kwd.length >= 3)) { // min 2 chars to execute query:
                        var xxx = '.' + kwd;

                        //$iso.destroy();
                        $iso.arrange({
                            filter: xxx
                        });
                    }
                    else if (kwd === '') {
                        var item = '.item';
                        //$('#isotopeContainer').isotope('destroy');
                        $iso.arrange({
                            filter: item
                        });
                    }
                }
            };
            // ************ menu slider ************* //
            $scope.showRightPush = function() {
                $('button').click(function(){

                    classie.toggle( this, 'active' );
                    classie.toggle( body, 'cbp-spmenu-push-toleft' );
                    classie.toggle( menuRight, 'cbp-spmenu-open' );
                    disableOther( 'showRightPush' );

                })

            };

            // ************ Random number generator ************* //
            $scope.getRandomSpan = function () {
                return Math.floor((Math.random() * 6) + 1);
            };
            // ************ Delete item ************* //
            $scope.deleteItem = function (index) {
                $scope.posts.splice(index, 1);
                //$('#posts-filter .all').trigger( "click");
            };
            init();
		}])
		// More involved example where controller is required from an external file
		.controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
//            var myDataRef = new Firebase('https://immersive.firebaseio.com/');
//            $('#messageInput').keypress(function (e) {
//                if (e.keyCode == 13) {
//                    var name = $('#nameInput').val();
//                    var text = $('#messageInput').val();
//                    myDataRef.push({name: name, text: text});
//                    $('#messageInput').val('');
//                }
//            });
//            $scope.sync = $firebase(myDataRef);
//            $scope.msg = sync.$asObject();
			require(['controllers/myctrl2' ], function(myctrl2) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(myctrl2, this, {'$scope': $scope});
			});
		}])
        .controller('MyCtrl3', ['$scope', '$injector', function($scope, $injector) {
            require(['controllers/myctrl3'], function(myctrl3) {
                $injector.invoke(myctrl3, this, {'$scope': $scope});
            });
        }])
        .controller('MyCtrl4', ['$scope', '$injector', 'ergastAPIservice', function($scope, $injector, ergastAPIservice) {
            require(['controllers/myctrl4'], function(myctrl4) {
                $injector.invoke(myctrl4, this, {'$scope': $scope});
            });
        }]);
});
