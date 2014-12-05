<?php
namespace Innologi\StreamovationsVp\Controller;

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
 * Video Controller
 *
 * @package streamovations_vp
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class VideoController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

	/**
	 * @var \Innologi\StreamovationsVp\Domain\Repository\VideoRepository
	 * @inject
	 */
	protected $videoRepository;


	/**
	 * Lists video's
	 *
	 * @return void
	 */
	public function listAction() {

	}

	/**
	 * Show video
	 *
	 * @param string $hash Video Hash ID
	 * @return void
	 */
	public function showAction($hash = NULL) {
		#$playlist = $this->videoRepository->findByHash($hash);
		$playlist = NULL;
		if (isset($this->settings['playlist']['hash'][0])) {
			$playlist = $this->videoRepository->findByHash(
				$this->settings['playlist']['hash']
			);
		}
		$this->view->assign('playlist', $playlist);
	}

}
