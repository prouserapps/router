import type { Request, Response } from 'express';
import { ControllerFactory } from '../facade';
export declare function adaptExpress(controller: ControllerFactory): (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=express.adapter.d.ts.map