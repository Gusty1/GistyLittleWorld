/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'youtube';
	config.extraPlugins = 'imgur';
    config.imgurClientID = '0a4c1d7727faf54'; //You need to change this key with your's
	config.removePlugins = 'easyimage,cloudservices,exportpdf';
};
