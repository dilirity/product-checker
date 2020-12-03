import express from 'express';

const config = {
	keywords: 'rtx 3080 asus strix',
	stores: [
		{
			name: 'ardes',
			url: 'https://ardes.bg/products?q=',
			productSelector: '.products-holder .product',
			availabilityType: 'listing-exists',
		},
		{
			name: 'ozone',
			url: 'https://www.ozone.bg/instantsearchplus/result/?q=',
			productSelector: '.isp_grid_product',
			availabilityType: 'listing-exists',
		},
		{
			name: 'jarcomputers',
			url: 'https://www.jarcomputers.com/search?q=',
			productSelector: '#product_list .hProduct',
			availabilityType: 'listing-indicator',
		},
		{
			name: 'gplay',
			url: 'https://gplay.bg/%D1%82%D1%8A%D1%80%D1%81%D0%B5%D0%BD%D0%B5?search_text=',
			productSelector: '.product-item',
			availabilityType: 'listing-indicator',
			listingIndicatorSelector: '.product-status .bg-success',
		},
		// indicator hard to check
		// {
		// 	name: 'desktop.bg',
		// 	url: 'https://desktop.bg/search?q=',
		// 	productSelector: '.products li',
		// 	availabilityType: 'listing-indicator',
		// 	listingIndicatorSelector: '.product-status .bg-success',
		// },
		{
			name: 'plasico',
			url: 'https://plasico.bg/tyrsene/',
			productSelector: '#list-results .product-box',
			availabilityType: 'listing-exists',
		},
		{
			name: 'plesio',
			url: 'https://plesio.bg/search.html?keyword=',
			productSelector: '.productListItem',
			availabilityType: 'listing-exists',
		},
		{
			name: 'pic.bg',
			url: 'https://www.pic.bg/search/',
			productSelector: '.product-item-holder',
			availabilityType: 'listing-exists',
		},
		// funky search not like the others
		// {
		// 	name: 'stokatastoki.bg',
		// 	url: 'https://www.stokatastoki.bg/index.php?route=product/search&search=',
		// 	productSelector: '.product-item-holder',
		// 	availabilityType: 'listing-exists',
		// },
		{
			name: 'cybertrade.bg',
			url: 'https://www.cybertrade.bg/product/search?search=',
			productSelector: '.product-layout',
			availabilityType: 'listing-exists',
		},
		{
			name: 'computer-store.bg',
			url: 'https://computer-store.bg/search?q=',
			productSelector: '#products-container .product',
			availabilityType: 'listing-exists',
		},
		{
			name: 'omni.bg',
			url: 'https://omni.bg/search.html?phrase=',
			productSelector: '.c-product-grid__wrapper',
			availabilityType: 'listing-exists',
		},
		{
			name: 'comshop.bg',
			url: 'https://comshop.bg/products/search?s=',
			productSelector: '.card-content-item',
			availabilityType: 'listing-exists',
		},
		{
			name: 'fly.bg',
			url: 'https://fly.bg/index.php?route=index&action=listing&q=',
			productSelector: '#products_listing_container > div[data-identifier="product_item"]',
			availabilityType: 'listing-exists',
		},
		{
			name: 'megamag.bg',
			url: 'https://megamag.bg/all-products?key=',
			productSelector: '#products-list .prod-col',
			availabilityType: 'listing-exists',
		},
		{
			name: 'technopolis.bg',
			url: 'https://www.technopolis.bg/en/search/?query=',
			productSelector: '#products-list .prod-col',
			availabilityType: 'listing-exists',
		},
		{
			name: 'technomarket.bg',
			url: 'https://www.technomarket.bg/search?query=',
			productSelector: 'tm-product-filter-list > div',
			availabilityType: 'listing-exists',
		},
		{
			name: 'pcbuild.bg',
			url: 'https://pcbuild.bg/search/search=',
			productSelector: '.products-list .product-item',
			availabilityType: 'listing-exists',
		},
		{
			name: 'emag.bg',
			url: 'https://www.emag.bg/search/',
			productSelector: '#card_grid .card-item',
			availabilityType: 'listing-exists',
		},
		{
			name: 'emag.bg',
			url: 'https://www.olx.bg/ads/q-',
			keywordSeparator: '-',
			trailingslash: true,
			productSelector: '.offers .wrap',
			availabilityType: 'listing-exists',
		},
	],
};

