import { HttpErrorResponse } from '@angular/common/http';

export interface ServiceBase {
    handleError(error: HttpErrorResponse);
}
