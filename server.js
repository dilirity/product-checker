import axios from 'axios';
import winston from 'winston';
import chalk from 'chalk';
import { JSDOM } from 'jsdom';
import jquery from 'jquery';

const logger = winston.createLogger();

logger.add(new winston.transports.Console({
	format: winston.format.simple(),
}));

const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const $ = jquery(window);

const config = {
	// keywords: 'rtx 3080 asus strix',
	keywords: 'kindle paperwhite',
	stores: [
		{
			name: 'ardes',
			homeUrl: 'https://ardes.bg',
			searchPageUrl: '/products?q=',
			productSelector: '.products-holder .product',
			titleSelector: '.title',
			availabilityType: 'listing-exists',
		},
		// uses ajax for products - neat
		// {
		// 	name: 'ozone',
		// 	homeUrl: 'https://www.ozone.bg/',
		// 	searchPageUrl: 'instantsearchplus/result/?q=',
		// 	productSelector: '.isp_grid_product',
		// 	titleSelector: '.isp_product_title',
		// 	availabilityType: 'listing-exists',
		// },
		// ajax to load stock indicator
		// {
		// 	name: 'jarcomputers',
		// 	homeUrl: 'https://www.jarcomputers.com/',
		// 	searchPageUrl: 'search?q=',
		// 	productSelector: '#product_list .hProduct',
		// 	titleSelector: '.long_title',
		// 	availabilityType: 'listing-indicator',
		// 	listingIndicatorSelector: '.list_avail .none',
		// },
		{
			name: 'gplay',
			homeUrl: 'https://gplay.bg/',
			searchPageUrl: '%D1%82%D1%8A%D1%80%D1%81%D0%B5%D0%BD%D0%B5?search_text=',
			productSelector: '.product-item',
			titleSelector: '.product-name',
			availabilityType: 'listing-indicator',
			listingIndicatorSelector: '.product-status .bg-danger',
		},
		// indicator hard to check
		// {
		// 	name: 'desktop.bg',
		// 	homeUrl: 'https://desktop.bg/',
		// 	searchPageUrl: 'search?q=',
		// 	productSelector: '.products li',
		// 	availabilityType: 'listing-indicator',
		// 	listingIndicatorSelector: '.product-status .bg-success',
		// },
		{
			name: 'plasico',
			homeUrl: 'https://plasico.bg/',
			searchPageUrl: 'tyrsene/',
			productSelector: '#list-results .product-box',
			titleSelector: '.ttl',
			availabilityType: 'listing-exists',
		},
		{
			name: 'plesio',
			homeUrl: 'https://plesio.bg/',
			searchPageUrl: 'search.html?keyword=',
			productSelector: '.productListItem',
			titleSelector: '.productTitle',
			availabilityType: 'listing-exists',
		},
		{
			name: 'pic.bg',
			homeUrl: 'https://www.pic.bg/',
			searchPageUrl: 'search/',
			productSelector: '.product-item-holder',
			titleSelector: '.title',
			availabilityType: 'listing-exists',
		},
		// funky search not like the others
		// {
		// 	name: 'stokatastoki.bg',
		// 	homeUrl: 'https://www.stokatastoki.bg/',
		// 	searchPageUrl: 'index.php?route=product/search&search=',
		// 	productSelector: '.product-item-holder',
		// 	availabilityType: 'listing-exists',
		// },
		{
			name: 'cybertrade.bg',
			homeUrl: 'https://www.cybertrade.bg/',
			searchPageUrl: 'product/search?search=',
			productSelector: '.product-layout',
			titleSelector: '.caption > h4 > a',
			availabilityType: 'listing-exists',
		},
		{
			name: 'computer-store.bg',
			homeUrl: 'https://computer-store.bg/',
			searchPageUrl: 'search?q=',
			productSelector: '#products-container .product',
			titleSelector: 'h3 > a[itemprop="name"]',
			availabilityType: 'listing-exists',
		},
		{
			name: 'omni.bg',
			homeUrl: 'https://omni.bg/',
			searchPageUrl: 'search.html?phrase=',
			productSelector: '.c-product-grid__hover-product-info',
			titleSelector: '.c-product-grid__product-title-link',
			availabilityType: 'listing-exists',
		},
		{
			name: 'comshop.bg',
			homeUrl: 'https://comshop.bg/',
			searchPageUrl: 'products/search?s=',
			productSelector: '.product',
			titleSelector: '.card-content-item--product-info > h5 > a',
			availabilityType: 'listing-exists',
		},
		{
			name: 'fly.bg',
			homeUrl: 'https://fly.bg/',
			searchPageUrl: 'index.php?route=index&action=listing&q=',
			productSelector: '#products_listing_container > div[data-identifier="product_item"]',
			titleSelector: '.product-title-listing',
			availabilityType: 'listing-exists',
		},
		{
			name: 'megamag.bg',
			homeUrl: 'https://megamag.bg/',
			searchPageUrl: 'all-products?key=',
			productSelector: '#products-list .prod-col',
			titleSelector: '.product-title',
			availabilityType: 'listing-exists',
		},
		{
			name: 'technopolis.bg',
			homeUrl: 'https://www.technopolis.bg/',
			searchPageUrl: 'en/search/?query=',
			productSelector: '.products-grid-list .list-item',
			titleSelector: '.item-name a',
			availabilityType: 'listing-exists',
		},
		// {
		// 	name: 'technomarket.bg',
		// 	homeUrl: 'https://www.technomarket.bg/',
		// 	searchPageUrl: 'search?query=',
		// 	productSelector: 'tm-product-filter-list > div',
		// 	titleSelector: '.title-link',
		// 	availabilityType: 'listing-exists',
		// },
		{
			name: 'pcbuild.bg',
			homeUrl: 'https://pcbuild.bg/',
			searchPageUrl: 'search/search=',
			productSelector: '.products-list .product-item',
			titleSelector: '.product-title',
			availabilityType: 'listing-exists',
		},
		{
			name: 'emag.bg',
			homeUrl: 'https://www.emag.bg/',
			searchPageUrl: 'search/',
			productSelector: '#card_grid .card-item',
			titleSelector: '.product-title',
			availabilityType: 'listing-exists',
		},
		{
			name: 'olx.bg',
			homeUrl: 'https://www.olx.bg/',
			searchPageUrl: 'ads/q-',
			keywordSeparator: '-',
			trailingslash: true,
			productSelector: '.offers .wrap',
			titleSelector: '.title-cell a strong',
			availabilityType: 'listing-exists',
		},
	],
};

const start = async () => {
	const keywords = config.keywords.toLowerCase();
	const keywordsParts = keywords.split(/\s+/g);
	const totalKeywords = keywordsParts.length;
	const stores   = config.stores;

	console.log(chalk.red(`Start search for - ${keywords}...`));

	for (let store of stores) {
		let url = getStoreSearchPageUrl(store);
		let searchTerm = '';
		if (store.hasOwnProperty('keywordSeparator')) {
			searchTerm = keywords.replace(/\s+/g, store.keywordSeparator);
		} else {
			searchTerm = keywords.replace(/\s+/g, '%20');
		}

		url += searchTerm;

		if (store.hasOwnProperty('trailingslash')) {
			url += '/';
		}

		let response;

		try {
			response = await makeCall(url);
		} catch (e) {
			logger.info(`[${store.name}] - not accessible`);
			console.log(e);
			continue;
		}

		const pageMarkup = response.data;
		const $page      = $(pageMarkup);
		const $products  = $page.find(store.productSelector);

		if (! $products.length) {
			logger.info(`[${store.name}] ` + chalk.red('NOT FOUND'));
			continue;
		}

		let productUrl = false;

		$products.each(function () {
			if (productUrl) {
				return;
			}

			var $product = $(this);
			if (store.availabilityType === 'listing-indicator') {
				if ($product.find(store.listingIndicatorSelector).length) {
					// if indicator is present, product is out of stock

					return;
				}
			}

			const $title = $product.find(store.titleSelector);
			if (! $title.length) {
				console.log('can\'t find title - wat do');
				return;
			}

			const titleText = $title.text().toLowerCase();

			let keywordCounter = 0;

			for (let keyword of keywordsParts) {
				if (titleText.indexOf(keyword) !== -1) {
					keywordCounter+=1;
				}
			}

			if (totalKeywords === keywordCounter) {
				productUrl = getProductFullUrl(store.homeUrl, $product.find('a').first().attr('href'));
				return;
			}
		});

		let message = `[${store.name}] `;

		if (productUrl) {
			let inStockText = chalk.green('IN STOCK');
			let urlText     = chalk.magenta(productUrl);

			message += `${inStockText} - ${urlText}`;
		} else {
			message += chalk.red('NOT FOUND');
		}

		logger.info(message);
	}

	start();
};

const makeCall = async (url) => {
	return await axios.get(url);
};

const getProductFullUrl = (storeUrl, productUrl) => {
	let fullUrl = productUrl.replace(storeUrl, '');

	return storeUrl + fullUrl;
};

const getStoreSearchPageUrl = (store) => {
	return store.homeUrl + store.searchPageUrl;
};

start();
