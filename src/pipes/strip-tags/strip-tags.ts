import { Pipe, PipeTransform } from "@angular/core";

/**
 * StripTags pipe
 * Used to strip HTML tags from a string

 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */

@Pipe({
	name: "stripTags",
})

export class StripTagsPipe implements PipeTransform {

	transform(text:string): string{
			return text.replace(/(<([^>]+)>)/ig,"");
	}
}
