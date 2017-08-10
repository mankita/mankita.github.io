/**
 * util.js stores utility JavaScript functions
 *
 * This file stores utility functions processing JS files
 *
 * Version 0.1 adds window.onload error handler, addOnload() function for safe JS function initialization
 * 
 * @package WEB150
 * @author Bill Newman <williamnewman@gmail.com>
 * @version 0.1 2010/04/27
 * @link http://www.billnsara.com/js/ 
 * @license http://opensource.org/licenses/osl-3.0.php Open Software License ("OSL") v. 3.0
 * @todo none
 */
 
/**
 * Anonymous function below attaches to window.onerror for error handling
 *
 * Set var named 'errors' to "default" to bypass custom error handling
 *
 * Set var named 'errors' to "alert" pop alerts for errors in FF/IE
 *
 * Set var named 'errors' to "hide" to suppress errors in FF/IE
 *
 * window.onerror not supported by Opera, Chrome or Safari currently
 *
 * Test in FF/IE first to increase chances of error free code
 * 
 * 
 * @param string myfunc reference to name of initialization function to add to window.onload
 * @return void
 * @todo none
 */
 
window.onerror = function (err, file, line) {
	//can be set to alert,hide or default (empty string)
	var errors = "alert";  
	
	switch(errors)
	{
		case "alert":
			alert('JavaScript Error: ' + err + '\n' +
			'In file: ' + file + '\n' +
			'At line: ' + line);
			return true;
			break;
		case "hide":
			return true;
			break;		
		default:
			return false; //default handler
	}
} 
 
 
/**
 * Allows safe & convenient way to add multiple JS functions to window.onload
 *
 * Many JS scripts hijack the window.onload function, which is not additive.
 *
 * Therefore many scripts over-write each other, and only one script gets loaded.
 *
 * This solution presents a browser neutral version that will add scripts to 
 * window.onload, and also will not interfere with more primitive hijacks.
 * 
 * @author Marcello Calbucci
 * @link http://haacked.com/archive/2006/04/06/StopTheWindow.OnloadMadness.aspx
 *
 * <code>
 * addOnload(init);
 * </code>
 *
 * IMPORTANT - there are no quotes around the name of the example function (init) above!
 * 
 * @param string myfunc reference to name of initialization function to add to window.onload
 * @return void
 * @todo none
 */
function addOnload(myfunc)
{//addOnload function allows us to attach
	if(window.addEventListener){
		window.addEventListener('load', myfunc, false);
	}else if(window.attachEvent){
		window.attachEvent('onload', myfunc);
	}
}
