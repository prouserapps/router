import { IController } from '../controller';
export type Middleware = (controllerFactory: ControllerFactory) => IController;
export type ControllerFactory = () => IController;
//# sourceMappingURL=types.d.ts.map