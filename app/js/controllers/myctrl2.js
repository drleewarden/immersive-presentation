define([], function() {
	return ['$scope', '$http', function($scope, $http) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is myctrl2.js!';

		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
        $scope.sayHello = function() {
            $scope.greeting = "Hello " + $scope.name;
        }
        var myDataRef = new Firebase('https://immersive.firebaseio.com/');
        $('#messageInput').keypress(function (e) {
            if (e.keyCode == 13) {
                var name = $('#nameInput').val();
                var text = $('#messageInput').val();
                myDataRef.push({name: name, text: text});
                $('#messageInput').val('');
            }
        });

        myDataRef.on('child_added', function(snapshot) {
            var message = snapshot.val();
            displayChatMessage(message.name, message.text);
        });
        function displayChatMessage(name, text) {
            $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
            $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
        };
	}];
});
