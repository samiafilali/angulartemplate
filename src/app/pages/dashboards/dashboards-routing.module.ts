import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';

import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'saas',
        component: SaasComponent
    },
  
    {
        path: 'blog',
        component: BlogComponent
    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
