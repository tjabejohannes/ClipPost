/**
 * Created by LittleGpNator on 06/06/2017.
 */

$( document ).ready(function() {
    var clipboard = new Clipboard('.btn', {
        target: function(trigger) {
            var valueArray = $(trigger).parent().find('input');
            var value = valueArray[0];
            return value;
        }
    });


    clipboard.on('success', function(e) {
        //console.info('Action:', e.action);
        console.info('Text:', e.text);
        //console.info('Trigger:', e.trigger);

        e.clearSelection();
    });


    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

});


