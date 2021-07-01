import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FilterPipePipe = class FilterPipePipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.code.toLowerCase().includes(searchText);
        });
    }
};
FilterPipePipe = tslib_1.__decorate([
    Pipe({
        name: 'filterPipe'
    })
], FilterPipePipe);
export { FilterPipePipe };
//# sourceMappingURL=filter-pipe.pipe.js.map