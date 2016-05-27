import { AboutComponent } from '../../modules/about/AboutComponent';
import { ProjComponent } from '../../modules/proj/ProjComponent';
import { SignupComponent } from '../../account/components/signup/SignupComponent';

export const routes = [
	{ path: '/signup', component: SignupComponent, name: 'Signup' },
	{ path: '/about', component: AboutComponent, name: 'About' },
	{ path: '/proj', component: ProjComponent, name: 'Proj' }
];
