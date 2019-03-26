import {NgModule} from "@angular/core";

import {PhpTimePipe} from "./php-time/php-time";
import {ReadMorePipe} from "./read-more/read-more";
import {StripTagsPipe} from "./strip-tags/strip-tags";

@NgModule({
	declarations: [PhpTimePipe,ReadMorePipe,StripTagsPipe],
	imports: [],
	exports: [PhpTimePipe,ReadMorePipe,StripTagsPipe]
})

export class PipesModule {}
