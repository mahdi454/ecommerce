import { publicProcedure, router } from './trpc';
 
 const appRouter = router({
  anyApiRoutes: publicProcedure.query(()=>{
    return 'hello'
  })
});
 
export type AppRouter = typeof appRouter;