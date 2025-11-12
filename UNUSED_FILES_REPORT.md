# Unused Files and Code Report

## ✅ Files That Have Been Removed

### 1. **Unused Components** ✅ REMOVED
- ✅ **`app/components/EventAgendaSection.vue`** - DELETED
  - Not imported or used anywhere in the codebase

- ✅ **`app/components/VideoSection.vue`** - DELETED
  - Not imported or used anywhere in the codebase
  - Note: Video functionality is handled in `MediaSection.vue` instead

### 2. **Unused Composables** ✅ REMOVED
- ✅ **`app/composables/useFetchWithErrorHandling.ts`** - DELETED
  - Not imported or used anywhere
  - The codebase uses `$fetch` directly instead

### 3. **Unused Plugins** ✅ REMOVED
- ✅ **`app/plugins/fetch-error-handler.client.ts`** - DELETED
  - Not explicitly used (though plugins auto-load in Nuxt)
  - Error handling is done directly in components using try/catch
  - The server-side error handler (`server/plugins/00-error-handler.ts`) is sufficient

### 4. **Empty Directories** ✅ REMOVED
- ✅ **`i18n/locales/`** - DELETED (empty directory)
  - Empty directory, no files inside
  - The i18n setup was reverted, so this directory is not needed

- ✅ **`locales/`** - DELETED (empty directory)
  - Empty directory at root level
  - Not used by the current setup

### 5. **Incomplete Pages** ✅ REMOVED
- ✅ **`app/pages/privacy.vue`** - DELETED
  - Only contained placeholder text "privacy"
  - Footer links to this page have been removed

- ✅ **`app/pages/terms.vue`** - DELETED
  - Only contained placeholder text "terms"
  - Footer links to this page have been removed

## ⚠️ Files That Are Actually Used (Kept)

### Utils
- ✅ **`app/utils/validation.ts`** - KEPT (Actually used!)
  - **Used by:** `server/api/submissions.post.ts`
  - Provides validation and sanitization for questionnaire submissions
  - Important for security (prevents injection attacks)

### 7. **Documentation Files** (Optional - keep for reference or remove)
- **`OWASP_SECURITY_AUDIT.md`** 📄
- **`QUESTIONNAIRE_SETUP.md`** 📄
- **`README.md`** 📄
- **`lighthouse-report.json`** 📄

### 8. **Utility Scripts** (Optional - keep for maintenance or remove)
- **`remove-large-files.ps1`** 🔧
- **`remove-large-files.sh`** 🔧

## ✅ Files That ARE Being Used

### Components (All Used)
- ✅ `CommunitySection.vue` - Used in `pages/index.vue`
- ✅ `EventsSection.vue` - Used in `pages/index.vue`
- ✅ `Footer.vue` - Used in `pages/index.vue`
- ✅ `HeroSection.vue` - Used in `pages/index.vue`
- ✅ `MediaSection.vue` - Used in `pages/index.vue`
- ✅ `MobileScrollButtons.vue` - Used in `pages/index.vue`
- ✅ `Navigation.vue` - Used in multiple pages
- ✅ `StorySection.vue` - Used in `pages/index.vue`

### Composables (All Used)
- ✅ `useScrollSnap.ts` - Used in `HeroSection.vue` and `MobileScrollButtons.vue`

### Server Files (All Used)
- ✅ `server/api/submissions.get.ts` - API endpoint
- ✅ `server/api/submissions.post.ts` - API endpoint
- ✅ `server/middleware/auth.ts` - Auto-loaded by Nuxt for admin routes
- ✅ `server/middleware/rateLimit.ts` - Auto-loaded by Nuxt for rate limiting
- ✅ `server/models/QuestionnaireSubmission.ts` - Used by API endpoints
- ✅ `server/plugins/00-error-handler.ts` - Auto-loaded error handler
- ✅ `server/plugins/mongodb.ts` - Auto-loaded MongoDB connection
- ✅ `server/utils/db.ts` - Used by MongoDB plugin

### Pages (All Used)
- ✅ `pages/index.vue` - Home page
- ✅ `pages/questionnaire.vue` - Questionnaire form
- ✅ `pages/secret/index.vue` - Secret chapters page
- ✅ `pages/admin/submissions.vue` - Admin page
- ✅ `pages/tickets.vue` - Tickets page

## 📋 Summary

**Total Unused Files: 8**
- 2 unused components
- 1 unused composable
- 1 unused plugin
- 1 unused util
- 2 empty directories
- 2 incomplete pages (need implementation or removal)

**Recommendation:**
1. Remove unused components, composables, plugins, and utils
2. Remove empty directories
3. Either implement privacy.vue and terms.vue or remove footer links to them
4. Keep documentation files if they're useful for reference
5. Keep utility scripts if needed for maintenance

