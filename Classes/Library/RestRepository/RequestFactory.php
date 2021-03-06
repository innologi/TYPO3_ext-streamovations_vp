<?php
namespace Innologi\StreamovationsVp\Library\RestRepository;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Frenck Lutke <typo3@innologi.nl>, www.innologi.nl
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * REST Request Factory
 *
 * @package InnologiLibs
 * @subpackage RestRepository
 * @author Frenck Lutke
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class RequestFactory extends FactoryAbstract implements RequestFactoryInterface {

	/**
	 * @var string
	 */
	protected $httpConfKey = 'ignoreHttpConfiguration';

	/**
	 * Resets settings context
	 *
	 * @param string $controller
	 * @param string $action
	 * @return $this
	 */
	public function reset($controller = NULL, $action = NULL) {
		$this->repositorySettingsManager->setContext($controller, $action);
		return $this;
	}

	/**
	 * Create REST request object
	 *
	 * @param string $objectType
	 * @param boolean $forceRawResponse
	 * @return RequestInterface
	 */
	public function create($objectType, $forceRawResponse = FALSE) {
		$settings = $this->repositorySettingsManager->getSettings($objectType);
		return $this->objectManager->get(
			__NAMESPACE__ . '\\RequestInterface',
			$this->createRequestUriObject(
				$settings['request'] ?? []
			),
			$objectType,
			$settings['request']['headers'] ?? [],
			$settings['cache'] ?? [],
			$forceRawResponse,
			(isset($settings['features'][$this->httpConfKey])
				&& (bool) $settings['features'][$this->httpConfKey]
					? []
					: $GLOBALS['TYPO3_CONF_VARS']['HTTP']
			)
		);
	}

	/**
	 * Creates RequestUri object via $settings:
	 * - scheme
	 * - baseUri
	 * - apiUri
	 * - strip
	 *
	 * @param array $settings
	 * @return RequestUriInterface
	 */
	protected function createRequestUriObject(array $settings) {
		/* @var $requestUri RequestUriInterface */
		$requestUri = $this->objectManager->get(
			__NAMESPACE__ . '\\RequestUriInterface'
		);
		$requestUri
			->setScheme($settings['scheme'] ?? '')
			->setBaseUri($settings['baseUri'] ?? '')
			->setApiUri($settings['apiUri'] ?? '')
			->setStrip($settings['strip'] ?? []);

		return $requestUri;
	}

}
