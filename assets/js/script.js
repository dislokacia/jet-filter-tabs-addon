jQuery(document).ready(function( $ ){
	
	//Create tab-switchers
	function create(){
		$('.jet-tab').parents('.jet-listing-grid__item').each(function(){
		var attr = $(this).attr('data-post-id');
		$(this).find('.jet-tab').attr('data-post-id', attr);
	});
    $('.jet-tab').appendTo('#column-tab .elementor-widget-wrap');
	}
	
	//General funtions
	function init() {	
		$('.jet-content').closest( ".jet-listing-grid__item" ).first().addClass('active');
		$('.jet-tab').first().addClass('active-tab');
	};
	function clear() {
		$('.jet-tab').removeClass("active-tab");
		$('.jet-content').closest( ".jet-listing-grid__item" ).removeClass("active");
	};
	
	//On page load
	create();
	init();
	$('.jet-tab').click(function () {
		var attr = $(this).attr("data-post-id");
		clear();
		$(this).addClass('active-tab');
  		$('.jet-content').closest(`[data-post-id='${attr}']`).addClass("active");
	});
	
	//After filtering
	$( document ).on( 'jet-filter-content-rendered', function() {
		//clear column-tab
		$('#column-tab .elementor-widget-wrap').html('');
		create();
		init();
  		$('.jet-tab').click(function () {
		var attr = $(this).attr("data-post-id");
		clear();
		$(this).addClass('active-tab');
  		$('.jet-content').closest(`[data-post-id='${attr}']`).addClass("active");
	}); 
    });

});