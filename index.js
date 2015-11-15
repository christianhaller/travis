/*global casper */
(function (casper) {
    'use strict';
    var url = 'http://www.tripadvisor.com/members/christianhaller';
    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0');

    casper.test.begin('basic functions', function (test) {

        casper.start('http://stage.download-your-travelmap.christianhaller.com/?url='+url, function () {
          
            this.wait(5000, function() {
                test.assertEvalEquals(function () {
                    return $('.js-username').text();
                }, 'christianhaller', 'correct name');
            });



        });


        casper.run(function () {
            test.done();
        });
    });

}(casper));

