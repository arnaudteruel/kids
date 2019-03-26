import { Pipe, PipeTransform } from "@angular/core";

/**
 * PhpTime pipe
 * Used to change the php format timestamp to JavaScript format

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */

@Pipe({
	name: "phpTime",
})

export class PhpTimePipe implements PipeTransform {

	transform(num:string): number{
			return parseInt(num) * 1000 ;
	}
}
