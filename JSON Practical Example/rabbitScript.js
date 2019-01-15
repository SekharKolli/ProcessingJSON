$(document).ready(function() {

	$.get('https://www.reddit.com/r/rabbits/top.json', function(reditRabbitJSONData){
		console.log(reditRabbitJSONData);
		
		var content = Mustache.render($('#rabbitTemplate').html(), reditRabbitJSONData.data);
		$('#divResults').html(content);

	})
    
});