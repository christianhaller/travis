/*global casper */
(function (casper) {
    'use strict';
    var url = 'http://www.tripadvisor.com/members/christianhaller';
    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0');


    casper.on("resource.error", function(resourceError){
        console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
        console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
    });

    casper.test.begin('basic functions', function (test) {

        casper.start('http://stage.download-your-travelmap.christianhaller.com/?url='+url, function () {





        });
        casper.then(function(){
            this.wait(8000, function() {
                test.assertEvalEquals(function () {
                    return __utils__.findOne('.js-username').textContent;
                    //return $('.js-username').text();
                }, 'christianhaller', 'correct name');
            });



        });


        casper.run(function () {
            test.done();
        });
    });

}(casper));

