import { HttpErrorResponse } from '@angular/common/http';

export interface ServiceBase {
    get(item: any);
    add(item: any);
    delete(item: any);
    handleError(error: HttpErrorResponse);
}
