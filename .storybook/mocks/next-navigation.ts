// Mock for next/navigation useRouter hook in Storybook
export const useRouter = () => ({
  push: (href: string) => {
    console.log(`[Storybook] Router.push called with: ${href}`);
  },
  replace: (href: string) => {
    console.log(`[Storybook] Router.replace called with: ${href}`);
  },
  refresh: () => {
    console.log(`[Storybook] Router.refresh called`);
  },
  back: () => {
    console.log(`[Storybook] Router.back called`);
  },
  forward: () => {
    console.log(`[Storybook] Router.forward called`);
  },
  prefetch: (href: string) => {
    console.log(`[Storybook] Router.prefetch called with: ${href}`);
  },
});
