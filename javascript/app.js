/**
 * Created by davem on 27/11/2016.
 */
var LearnJavaScript={};

LearnJavaScript.questionView= function(){
    return $('<div class="question-view">').text('Arriving soon!!!');
};

LearnJavaScript.showView = function(hash) {
    var routes = {
        'question-1': LearnJavaScript.questionView
    };
    var viewFn = routes[hash];
    if (viewFn) {
        $('.view-container').empty().append()
    }
}