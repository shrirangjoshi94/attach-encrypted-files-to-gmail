InboxSDK.load('1', 'sdk_shrirangjosh94_fb0f52da01').then(function (sdk) {

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function (composeView) {

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "Attach Encrypted Files",
			iconUrl: 'https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365',
			onClick: function (event) {

				var el = '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"' +
					'<div class="modal-header">' +
					'<h3 id="myModalLabel">Attach Files</h3></div>' +
					'<div class="modal-body">' +
					'<form id="fileUploadForm" method="post" enctype="multipart/form-data">' +
					'<input type="file" name="FileAttachement[]" multiple="true" id="FileInput" class="form-control" value="FileInput" />' +
					'</form>' +
					'<input type="submit" class="fileAttachementSubmitButton">' +
					'</div></div>';

				var modal = sdk.Widgets.showModalView({
					el
				});

				$(document).delegate('.fileAttachementSubmitButton', 'click', function () {

					//var attachedFiles = $('#FileInput').prop('files');
					//console.log(attachedFiles);

					var form = $("#fileUploadForm");
					//console.log(form);

					var formData = new FormData(form[0]);
					$.ajax({
						type: "post",
						url: 'your server url',
						crossDomain: true,
						async: true,
						processData: false,
						contentType: false,
						mimeType: "multipart/form-data",
						headers: {
							"Content-Type": "application/json",
							"Cache-Control": "no-cache"
						},
						data: {
							data: formData
						},
						success: function (data) {
							alert("in success");
							console.log(data);
						}
					});

					//var attachFilesToMail = composeView.attachFiles(attachedFiles);
					modal.close();
				});

			},
		});
	});
});
