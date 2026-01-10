# Implement and Render Data from REST Countries API

## Description

Implement a comprehensive solution for fetching and rendering country data from the REST Countries API (https://restcountries.com/). The current implementation has basic functionality, but needs enhancement to provide a better user experience with more data fields, error handling, loading states, and improved UI/UX.

## Current State

- Basic API integration exists in `app/page.tsx`
- Currently fetching: `name`, `capital`, `flags`, `population`, `region`
- Basic `CountryList` and `CountryCard` components are implemented
- World Bank API call exists but is not being utilized

## Requirements

### 1. Enhanced Data Fetching

- [ ] Implement proper error handling for API requests
- [ ] Add loading states during data fetch
- [ ] Consider implementing client-side data fetching with SWR (already in dependencies) for better UX
- [ ] Add retry logic for failed requests
- [ ] Implement proper TypeScript types for API responses

### 2. Additional Data Fields

- [ ] Display additional country information such as:
  - Currency information
  - Languages
  - Timezones
  - Area (land size)
  - Borders (neighboring countries)
  - Subregion
  - Top-level domain (TLD)
- [ ] Make data fields configurable/optional

### 3. UI/UX Improvements

- [ ] Add search/filter functionality (by name, region, capital)
- [ ] Implement sorting options (by population, area, name)
- [ ] Add pagination or infinite scroll for better performance
- [ ] Improve responsive design for mobile devices
- [ ] Add loading skeletons/placeholders
- [ ] Add error messages with retry options
- [ ] Enhance country card design with more visual appeal

### 4. Performance Optimization

- [ ] Implement proper caching strategy
- [ ] Add image optimization for country flags
- [ ] Consider lazy loading for country cards
- [ ] Optimize bundle size

### 5. Additional Features (Optional)

- [ ] Country detail page/modal with comprehensive information
- [ ] Dark mode support
- [ ] Favorites/bookmark functionality
- [ ] Comparison view for multiple countries
- [ ] Export functionality (CSV, JSON)

## Technical Details

### API Endpoint

- Base URL: `https://restcountries.com/v3.1/`
- Current endpoint: `/all?fields=name,capital,flags,population,region`
- Available endpoints:
  - `/all` - All countries
  - `/name/{name}` - Search by country name
  - `/region/{region}` - Filter by region
  - `/alpha/{code}` - Get country by code

### Tech Stack

- Next.js 16.1.1
- React 19.2.3
- TypeScript
- Tailwind CSS
- SWR (for client-side data fetching)

## Acceptance Criteria

- [ ] All country data is successfully fetched from REST Countries API
- [ ] Data is properly typed with TypeScript interfaces
- [ ] Error states are handled gracefully with user-friendly messages
- [ ] Loading states provide good UX feedback
- [ ] Country cards display all required information clearly
- [ ] Search and filter functionality works correctly
- [ ] Application is responsive across all device sizes
- [ ] Code follows project's coding standards and best practices
- [ ] No console errors or warnings
- [ ] Performance is optimized (lighthouse score > 90)

## Files to Modify/Create

- `app/page.tsx` - Main page component (already exists)
- `app/components/CountryList.tsx` - Country list component (already exists)
- `app/components/CountryCard.tsx` - Country card component (already exists)
- `app/types/country.ts` - TypeScript types for country data (new)
- `app/lib/api.ts` - API utility functions (new)
- `app/components/SearchBar.tsx` - Search component (new)
- `app/components/FilterBar.tsx` - Filter component (new)
- `app/components/LoadingSkeleton.tsx` - Loading state component (new)
- `app/components/ErrorMessage.tsx` - Error state component (new)

## Resources

- [REST Countries API Documentation](https://restcountries.com/)
- [SWR Documentation](https://swr.vercel.app/)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

## Priority

**Medium** - Enhances existing functionality and improves user experience

## Labels

`enhancement`, `frontend`, `api-integration`, `ui/ux`
