<?php
/**
 * WebGL Twitter Globe
 * A WebGL based real-time data visualisation of Twitter activity for the chosen brands.
 *
 * 2015 (c) Greg Kedzierski
 * http://gregkedzierski.com
 * greg@gregkedzierski.com
 */

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class CodeQuality extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'code:quality';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Check PHP code quality.';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		$this->commands['php -l ./app']                                       = 'Linting PHP code... ';
		$this->commands['php vendor/bin/phpunit -c phpunit.xml']              = 'Running PHPUnit test suite... ';
		$this->commands['php vendor/bin/phpspec run']            	          = 'Running PHPSpec test suite... ';
		$this->commands['php vendor/bin/phpcs --standard=PSR2 ./app/']        = 'Checking for PSR-2 compatibility... ';
        $this->commands['php vendor/bin/phpmd ./app/ text ./build/phpmd.xml'] = 'Running PHP Mess Detector... ';

		foreach ($this->commands as $command => $description) {
            $this->runCommand($command, $description);
        }
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return [];
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return [];
	}

    /**
     * @param $output string
     *
     * @SuppressWarnings(PHPMD.ExitExpression)
     */
    private function displayErrorOutput($output)
    {
        if (!is_array($output) || count($output) === 0) {
            return;
        }

        // Make console output red
        echo PHP_EOL . "\033[0;31m";

        // Display every line
        foreach ($output as $line) {
            echo $line . PHP_EOL;
        }

        // Reset output style
        echo "\033[0m" . PHP_EOL;

        exit(1);
    }

    /**
     * Display success message in console
     */
    private function displaySuccessMessage()
    {
        echo "\033[1;32mOK\033[0m";
    }

    /**
     * @param $command
     * @param $description
     */
    private function runCommand($command, $description)
    {
        $output = [];
        $returnCode = 0;

        echo $description;
        exec($command . ' 2>&1', $output, $returnCode);
        if ($returnCode !== 0) {
            $this->displayErrorOutput($output);

            return;
        }

        $this->displaySuccessMessage();

        echo PHP_EOL;
    }
}
