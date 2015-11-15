/*global casper */
(function (casper) {
    'use strict';
    var url = 'http://www.tripadvisor.com/members/christianhaller';
    casper.test.begin('basic functions', function (test) {

        casper.start('http://stage.download-your-travelmap.christianhaller.com/?url='+url, function () {
            /*this.echo(this.getCurrentUrl());
            this.fillSelectors('.url-form', {
                '[name="url"]': url
            }, true);*/

            this.wait(6000, function() {
                this.echo(this.getCurrentUrl());
                test.assertEvalEquals(function () {
                    return $('.pure-alert-error').text();
                }, ' ', 'no error');

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

