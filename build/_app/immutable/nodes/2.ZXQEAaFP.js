import { s as v, n as l } from '../chunks/scheduler.zMJaRgub.js';
import {
	S as d,
	i as f,
	e as p,
	s as h,
	c as m,
	m as u,
	h as j,
	j as o,
	g as i
} from '../chunks/index.yqhJhEpl.js';
const x = !0,
	S = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: x }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
function g(_) {
	let e,
		r = 'Welcome to SvelteKit',
		n,
		s,
		c = 'Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation';
	return {
		c() {
			(e = p('h1')), (e.textContent = r), (n = h()), (s = p('p')), (s.innerHTML = c);
		},
		l(t) {
			(e = m(t, 'H1', { 'data-svelte-h': !0 })),
				u(e) !== 'svelte-yyjjjs' && (e.textContent = r),
				(n = j(t)),
				(s = m(t, 'P', { 'data-svelte-h': !0 })),
				u(s) !== 'svelte-jl9sbz' && (s.innerHTML = c);
		},
		m(t, a) {
			o(t, e, a), o(t, n, a), o(t, s, a);
		},
		p: l,
		i: l,
		o: l,
		d(t) {
			t && (i(e), i(n), i(s));
		}
	};
}
class b extends d {
	constructor(e) {
		super(), f(this, e, null, g, v, {});
	}
}
export { b as component, S as universal };
