// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const { scss } = preprocess;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess([
    scss(),
  ]),

	kit: {
		adapter: adapter({
      fallback: 'index.html'
    }),
    vite: {
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
    }
    // vite: {
    //   build: {
    //     cssCodeSplit: false
    //   },
    // }
	}
};

export default config;
