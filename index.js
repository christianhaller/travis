/*global casper */
(function (casper) {
	'use strict';
	var tripAdvisorProfileUrl = 'http://www.tripadvisor.com/members/christianhaller',
		stageUrl = 'http://stage.download-your-travelmap.christianhaller.com/';
	//casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:42.0) Gecko/20100101 Firefox/42.0');

	casper.options.viewportSize = {width: 1600, height: 950};
	casper.on("resource.error", function (resourceError) {
		console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
		console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
	});


	casper.test.begin('basic functions', function (test) {


		casper.start(stageUrl, function () {
			this.evaluate(function () {
				return __utils__.findOne('.url-form').setAttribute('action', stageUrl);
			});
			this.fill('.url-form', { url: tripAdvisorProfileUrl }, true);

			this.waitForUrl(stageUrl + '?url=' + tripAdvisorProfileUrl, function () {
				console.log(this.getCurrentUrl());
				test.assertEquals(this.fetchText('.js-username'), 'christianhaller', 'name');
			});


		});


		casper.run(function () {
			test.done();
		});
	});

}(casper));

