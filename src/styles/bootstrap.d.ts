import { StyleSheet } from 'react-native'
import _BootstrapStyleSheet from 'react-native-bootstrap-styles'

export interface LiteralConstants {
  // Options
  
  ENABLE_ROUNDED: true
  ENABLE_SHADOWS: false
  ENABLE_GRADIENTS: true
  // $enable-transitions: true,
  ENABLE_GRID_CLASSES: true
  
  REM: 14
  
  // Colors
  
  WHITE: '#fff'
  GRAY_100: '#f8f9fa'
  GRAY_200: '#e9ecef'
  GRAY_300: '#dee2e6'
  GRAY_400: '#ced4da'
  GRAY_500: '#adb5bd'
  GRAY_600: '#6c757d'
  GRAY_700: '#495057'
  GRAY_800: '#343a40'
  GRAY_900: '#212529'
  BLACK: '#000'
  
  GRAYS: {
    100: LiteralConstants['GRAY_100'],
    200: LiteralConstants['GRAY_200'],
    300: LiteralConstants['GRAY_300'],
    400: LiteralConstants['GRAY_400'],
    500: LiteralConstants['GRAY_500'],
    600: LiteralConstants['GRAY_600'],
    700: LiteralConstants['GRAY_700'],
    800: LiteralConstants['GRAY_800'],
    900: LiteralConstants['GRAY_900'],
  }
  
  BLUE: '#007bff'
  CYAN: '#17a2b8'
  RED: '#dc3545'
  YELLOW: '#ffc107'
  GREEN: '#28a745'
  INDIGO: '#6610f2'
  PYRPLE: '#6f42c1'
  PINK: '#e83e8c'
  ORANGE: '#fd7e14'
  TEAL: '#20c997'
  
  PRIMARY: LiteralConstants['BLUE']
  SECONDARY: LiteralConstants['GRAY_600']
  SUCCESS: LiteralConstants['GREEN']
  INFO: LiteralConstants['CYAN']
  WARNING: LiteralConstants['YELLOW']
  DANGER: LiteralConstants['RED']
  LIGHT: LiteralConstants['GRAY_100']
  DARK: LiteralConstants['GRAY_800']
  
  THEME_COLORS: {
    PRIMARY: LiteralConstants['PRIMARY'],
    SECONDARY: LiteralConstants['SECONDARY'],
    SUCCESS: LiteralConstants['SUCCESS'],
    INFO: LiteralConstants['INFO'],
    WARNING: LiteralConstants['WARNING'],
    DANGER: LiteralConstants['DANGER'],
    LIGHT: LiteralConstants['LIGHT'],
    DARK: LiteralConstants['DARK'],
  }
  
  THEME_COLOR_INTERVAL: .08
  
  YIG_CONTRASTED_THRESHOLD: 1
  YIG_TEXT_DARK: LiteralConstants['GRAY_900']
  YIG_TEXT_LIGHT: LiteralConstants['WHITE']

  // Spacing
  
  SPACER: LiteralConstants['REM']
  SPACERS: {
    0: 0,
    1: 3.5,
    2: 7,
    3: 14,
    4: 21,
    5: 42
  }
  
  SIZES: {
    5: '5%',
    10: '20%',
    15: '15%',
    20: '20%',
    25: '25%',
    30: '30%',
    35: '35%',
    40: '40%',
    45: '45%',
    50: '50%',
    55: '55%',
    60: '60%',
    65: '65%',
    70: '70%',
    75: '75%',
    80: '80%',
    85: '85%',
    90: '90%',
    95: '95%',
    100: '100%',
    Auto: 'auto',
  }
  
  GRID_BREAKPOINTS_HORIZONTAL: {
    Xs: 0,
    Sm: 480,
    Md: 768,
    Lg: 1024,
    Xl: 1536
  }
  
  // experimental
  GRID_BREAKPOINTS_VERTICAL: {
    Xs: 0,
    Sm: 640,
    Md: 1024,
    Lg: 1536,
    Xl: 2048
  }
  
  GRID_BREAKPOINTS: LiteralConstants['GRID_BREAKPOINTS_HORIZONTAL']
  
  // GRID_BREAKPOINTS_HORIZONTAL * 0.9375
  CONTAINER_MAX_WIDTHS: {
    Sm: 450,
    Md: 720,
    Lg: 960,
    Xl: 1440
  }
  
  // Body
  
  BODY_BG: LiteralConstants['WHITE']
  BODY_COLOR: LiteralConstants['GRAY_900']
  
  // Links
  
  LINK_COLOR: LiteralConstants['INFO']
  LINK_DECORATION: 'none'
  LINK_DECORATION_LINE: LiteralConstants['LINK_DECORATION']
  LINK_DECORATION_COLOR: LiteralConstants['LINK_COLOR']
  LINK_DECORATION_STYLE: 'solid'
  
  // why hover?
  // https://blog.expo.io/css-pseudo-class-effects-in-expo-for-web-56649f88eb6b
  LINK_HOVER_COLOR: string
  LINK_HOVER_DECORATION: 'underline'
  LINK_HOVER_DECORATION_LINE: LiteralConstants['LINK_HOVER_DECORATION']
  LINK_HOVER_DECORATION_COLOR: LiteralConstants['LINK_HOVER_COLOR']
  LINK_HOVER_DECORATION_STYLE: 'solid'
  // // Darken percentage for links with `.text-*` class (e.g. `.text-success`)
  // $emphasized-link-hover-darken-percentage: 15% !default;
  
  // Grid
  
  GRID_COLUMNS: 12
  GRID_GUTTER_WIDTH: 21
  GRID_ROW_COLUMNS: 6
  
  // Components
  
  LINE_HEIGHT_LG: 14
  LINE_HEIGHT_SM: 14
  
  BORDER_WIDTH: typeof RN.StyleSheet.hairlineWidth
  BORDER_COLOR: LiteralConstants['GRAY_300']
  
  BORDER_RADIUS: 4.2
  BORDER_RADIUS_LG: 7
  BORDER_RADIUS_SM: 2.1
  
  ROUNDED_PILL: 7
  
  SHADOW: {elevation: 7} | {}
  SHADOW_COLOR: LiteralConstants['BLACK']
  SHADOW_OPACITY: .125
  SHADOW_OFFSET: { width: 0, height: 7 }
  SHADOW_RADIUS: 10.5
  
  SHADOW_SM: {elevation: 1} | {}
  SHADOW_COLOR_SM: LiteralConstants['SHADOW_COLOR']
  SHADOW_OPACITY_SM: 0.1
  SHADOW_OFFSET_SM: { width: 0, height: .1708 }
  SHADOW_RADIUS_SM: 7
  
  SHADOW_LG: {elevation: 15} | {}
  SHADOW_COLOR_LG: LiteralConstants['SHADOW_COLOR']
  SHADOW_OPACITY_LG: .15
  SHADOW_OFFSET_LG: { width: 0, height: 14 }
  SHADOW_RADIUS_LG: 21
  
  COMPONENT_ACTIVE_COLOR: LiteralConstants['WHITE']
  COMPONENT_ACTIVE_BG: LiteralConstants['PRIMARY']
  
  // Fonts
  FONT_FAMILY_SANS_SERIF: 'System'
  FONT_FAMILY_MONOSPACE: 'Courier New' | 'monospace'
  FONT_FAMILY_BASE: LiteralConstants['FONT_FAMILY_SANS_SERIF']
  FONT_FAMILY_BASE_LIGHT: LiteralConstants['FONT_FAMILY_SANS_SERIF']
  FONT_FAMILY_BASE_BOLD: LiteralConstants['FONT_FAMILY_SANS_SERIF']
  
  FONT_SIZE_BASE: LiteralConstants['REM']
  FONT_SIZE_SM: 12.25
  FONT_SIZE_LG: 17.5
  
  FONT_WEIGHT_LIGHT: '300'
  FONT_WEIGHT_NORMAL: '400'
  FONT_WEIGHT_BOLD: '700'
  
  FONT_WEIGHT_BASE: LiteralConstants['FONT_WEIGHT_NORMAL']
  LINE_HEIGHT_BASE: 21
  
  H1_FONT_SIZE: 35
  H2_FONT_SIZE: 28
  H3_FONT_SIZE: 24.5
  H4_FONT_SIZE: 21
  H5_FONT_SIZE: 17.5
  H6_FONT_SIZE: 14
  
  HEADINGS_MARGIN_BOTTOM: 28
  HEADINGS_FONT_FAMILY: LiteralConstants['FONT_FAMILY_BASE']
  HEADINGS_FONT_WEIGHT: LiteralConstants['FONT_WEIGHT_BASE']
  HEADINGS_COLOR: LiteralConstants['BODY_COLOR']
  
  LEAD_FONT_SIZE: 17.5
  LEAD_FONT_WEIGHT: '300'
  
  // $small-font-size: _('LINE_HEIGHT_BASE', 0.8)
  
  TEXT_MUTED: LiteralConstants['GRAY_600']
  
  // BLOCKQUOTE_SMALL_COLOR: GRAY_600
  // BLOCKQUOTE_SMALL_FONT_SIZE: SMALL_FONT_SIZE
  BLOCKQUOTE_FONT_SIZE: LiteralConstants['REM']
  
  HR_BORDER_COLOR: string
  HR_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  
  MARK_PADDING: 2.8
  
  // $dt-font-weight:              $font-weight-bold !default;
  // $nested-kbd-font-weight:      $font-weight-bold !default;
  
  LIST_INLINE_PADDING: 7
  MARK_BG: '#fcf8e3'
  HR_MARGIN_Y: LiteralConstants['SPACER']
  
  // Tables
  
  TABLE_CELL_PADDING: 10.5
  TABLE_CELL_PADDING_SM: 4.2
  
  TABLE_COLOR: LiteralConstants['BODY_COLOR']
  TABLE_BG: null
  TABLE_ACCENT_BG: string
  TABLE_HOVER_COLOR: LiteralConstants['TABLE_COLOR']
  TABLE_HOVER_BG: string
  TABLE_ACTIVE_BG: LiteralConstants['TABLE_HOVER_BG']
  
  TABLE_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  TABLE_BORDER_COLOR: LiteralConstants['BORDER_COLOR']
  
  TABLE_HEAD_BG: LiteralConstants['GRAY_200']
  TABLE_HEAD_COLOR: LiteralConstants['GRAY_700']
  
  TABLE_DARK_COLOR: LiteralConstants['WHITE']
  TABLE_DARK_BG: LiteralConstants['GRAY_800']
  TABLE_DARK_ACCENT_BG: string
  TABLE_DARK_HOVER_COLOR: LiteralConstants['TABLE_DARK_COLOR']
  TABLE_DARK_HOVER_BG: string
  TABLE_DARK_BORDER_COLOR: string
  
  // TABLE_STRIPED_ORDER: 'odd'
  
  TABLE_CAPTION_COLOR: LiteralConstants['TEXT_MUTED']
  TABLE_BG_LEVEL: -9
  TABLE_BORDER_LEVEL: -6
  
  // Forms
  
  INPUT_BTN_PADDING_Y: 5.25
  INPUT_BTN_PADDING_X: 10.5
  INPUT_BTN_FONT_FAMILY: LiteralConstants['FONT_FAMILY_BASE']
  INPUT_BTN_FONT_SIZE: LiteralConstants['FONT_SIZE_BASE']
  INPUT_BTN_LINE_HEIGHT: LiteralConstants['LINE_HEIGHT_BASE']
  
  INPUT_BTN_FOCUS_WIDTH: 2.8
  INPUT_BTN_FOCUS_COLOR: string
  INPUT_BTN_FOCUS_BOX_SHADOW_COLOR: LiteralConstants['INPUT_BTN_FOCUS_COLOR']
  INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY: LiteralConstants['SHADOW_OPACITY']
  INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET: {width: 0, height: 0}
  INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS: LiteralConstants['INPUT_BTN_FOCUS_WIDTH']
  
  INPUT_BTN_PADDING_Y_SM: 3.5
  INPUT_BTN_PADDING_X_SM: 7
  INPUT_BTN_FONT_SIZE_SM: LiteralConstants['FONT_SIZE_SM']
  INPUT_BTN_LINE_HEIGHT_SM: LiteralConstants['LINE_HEIGHT_SM']
  
  INPUT_BTN_PADDING_Y_LG: 7
  INPUT_BTN_PADDING_X_LG: 14
  INPUT_BTN_FONT_SIZE_LG: LiteralConstants['FONT_SIZE_LG']
  INPUT_BTN_LINE_HEIGHT_LG: LiteralConstants['LINE_HEIGHT_LG']
  
  INPUT_BTN_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  
  // Buttons
  
  BTN_PADDING_Y: LiteralConstants['INPUT_BTN_PADDING_Y']
  BTN_PADDING_X: LiteralConstants['INPUT_BTN_PADDING_X']
  BTN_FONT_FAMILY: LiteralConstants['INPUT_BTN_FONT_FAMILY']
  BTN_FONT_SIZE: LiteralConstants['INPUT_BTN_FONT_SIZE']
  BTN_LINE_HEIGHT: LiteralConstants['INPUT_BTN_LINE_HEIGHT']
  // BTN_WHITE_SPACE: 'null' / reserved
  
  BTN_PADDING_Y_SM: LiteralConstants['INPUT_BTN_PADDING_Y_SM']
  BTN_PADDING_X_SM: LiteralConstants['INPUT_BTN_PADDING_X_SM']
  BTN_FONT_SIZE_SM: LiteralConstants['INPUT_BTN_FONT_SIZE_SM']
  BTN_LINE_HEIGHT_SM: LiteralConstants['INPUT_BTN_LINE_HEIGHT_SM']
  
  BTN_PADDING_Y_LG: LiteralConstants['INPUT_BTN_PADDING_Y_LG']
  BTN_PADDING_X_LG: LiteralConstants['INPUT_BTN_PADDING_X_LG']
  BTN_FONT_SIZE_LG: LiteralConstants['INPUT_BTN_FONT_SIZE_LG']
  BTN_LINE_HEIGHT_LG: LiteralConstants['INPUT_BTN_LINE_HEIGHT_LG']
  
  BTN_BORDER_WIDTH: LiteralConstants['INPUT_BTN_BORDER_WIDTH']
  
  BTN_FONT_WEIGHT: LiteralConstants['FONT_WEIGHT_NORMAL']
  // btn-box-shadow: inset 0 1px 0 rgba($white, .15) 0 1px 1px rgba($black, .075) !default;
  // BTN_BOX_SHADOW_COLOR: ...
  // BTN_BOX_SHADOW_OPACITY: ...
  // BTN_BOX_SHADOW_OFFSET: ...
  // BTN_BOX_SHADOW_RADIUS: ...
  BTN_FOCUS_WIDTH: LiteralConstants['INPUT_BTN_FOCUS_WIDTH']
  // BTN_FOCUS_BOX_SHADOW_COLOR: INPUT_BTN_FOCUS_BOX_SHADOW_COLOR
  // BTN_FOCUS_BOX_SHADOW_OPACITY: INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY
  // BTN_FOCUS_BOX_SHADOW_OFFSET: INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET
  // BTN_FOCUS_BOX_SHADOW_RADIUS: INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS
  BTN_DISABLED_OPACITY: .65
  // BTN_active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;
  // BTN_ACTIVE_BOX_SHADOW_COLOR: ...
  // BTN_ACTIVE_BOX_SHADOW_OPACITY: ...
  // BTN_ACTIVE_BOX_SHADOW_OFFSET: ...
  // BTN_ACTIVE_BOX_SHADOW_RADIUS: ...
  
  BTN_LINK_DISABLED_COLOR: LiteralConstants['GRAY_600']
  
  BTN_BLOCK_SPACING_Y: 7
  
  BTN_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  BTN_BORDER_RADIUS_LG: LiteralConstants['BORDER_RADIUS_LG']
  BTN_BORDER_RADIUS_SM: LiteralConstants['BORDER_RADIUS_SM']
  
  BTN_OUTLINE_BACKGROUND_COLOR: LiteralConstants['BODY_BG']
  
  // Forms
  
  LABEL_MARGIN_BOTTOM: 7
  
  INPUT_PADDING_Y: LiteralConstants['INPUT_BTN_PADDING_Y']
  INPUT_PADDING_X: LiteralConstants['INPUT_BTN_PADDING_X']
  INPUT_FONT_FAMILY: LiteralConstants['INPUT_BTN_FONT_FAMILY']
  INPUT_FONT_SIZE: LiteralConstants['INPUT_BTN_FONT_SIZE']
  INPUT_FONT_WEIGHT: LiteralConstants['FONT_WEIGHT_BASE']
  INPUT_LINE_HEIGHT: LiteralConstants['INPUT_BTN_LINE_HEIGHT']
  
  INPUT_PADDING_Y_SM: LiteralConstants['INPUT_BTN_PADDING_Y_SM']
  INPUT_PADDING_X_SM: LiteralConstants['INPUT_BTN_PADDING_X_SM']
  INPUT_FONT_SIZE_SM: LiteralConstants['INPUT_BTN_FONT_SIZE_SM']
  INPUT_LINE_HEIGHT_SM: LiteralConstants['INPUT_BTN_LINE_HEIGHT_SM']
  
  INPUT_PADDING_Y_LG: LiteralConstants['INPUT_BTN_PADDING_Y_LG']
  INPUT_PADDING_X_LG: LiteralConstants['INPUT_BTN_PADDING_X_LG']
  INPUT_FONT_SIZE_LG: LiteralConstants['INPUT_BTN_FONT_SIZE_LG']
  INPUT_LINE_HEIGHT_LG: LiteralConstants['INPUT_BTN_LINE_HEIGHT_LG']
  
  INPUT_BG: LiteralConstants['WHITE']
  INPUT_DISABLED_BG: LiteralConstants['GRAY_200']
  
  INPUT_COLOR: LiteralConstants['GRAY_700']
  INPUT_BORDER_COLOR: LiteralConstants['GRAY_400']
  INPUT_BORDER_WIDTH: LiteralConstants['INPUT_BTN_BORDER_WIDTH']
  INPUT_SHADOW_COLOR: LiteralConstants['BLACK']
  INPUT_SHADOW_OPACITY: .075
  INPUT_SHADOW_OFFSET: {width: 0, height: 1}
  INPUT_SHADOW_RADIUS: 1
  
  INPUT_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  INPUT_BORDER_RADIUS_LG: LiteralConstants['BORDER_RADIUS_LG']
  INPUT_BORDER_RADIUS_SM: LiteralConstants['BORDER_RADIUS_SM']
  
  INPUT_FOCUS_BG: LiteralConstants['INPUT_BG']
  INPUT_FOCUS_BORDER_COLOR: string
  INPUT_FOCUS_COLOR: LiteralConstants['INPUT_COLOR']
  INPUT_FOCUS_WIDTH: LiteralConstants['INPUT_BTN_FOCUS_WIDTH']
  INPUT_FOCUS_BOX_SHADOW_RADIUS: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS']
  INPUT_FOCUS_BOX_SHADOW_OFFSET: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET']
  INPUT_FOCUS_BOX_SHADOW_COLOR: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_COLOR']
  INPUT_FOCUS_BOX_SHADOW_OPACITY: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY']
  
  INPUT_PLACEHOLDER_COLOR: LiteralConstants['GRAY_600']
  INPUT_PLAINTEXT_COLOR: LiteralConstants['BODY_COLOR']
  
  INPUT_HEIGHT_BORDER: number
  
  INPUT_HEIGHT_INNER: 31.5
  INPUT_HEIGHT_INNER_SM: 21
  INPUT_HEIGHT_INNER_LG: 28
  
  INPUT_HEIGHT: number
  INPUT_HEIGHT_SM: number
  INPUT_HEIGHT_LG: number
  
  // $input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
  // $input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
  // $input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;
  
  // $input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
  
  FORM_TEXT_MARGIN_TOP: 3.5
  
  FORM_CHECK_INPUT_GUTTER: 17.5
  FORM_CHECK_INPUT_MARGIN_Y: 4.2
  FORM_CHECK_INPUT_MARGIN_X: 3.5
  
  FORM_CHECK_INLINE_MARGIN_X: 10.5
  FORM_CHECK_INLINE_INPUT_MARGIN_X: 4.375
  
  FORM_GRID_GUTTER_WIDTH: 10
  FORM_GROUP_MARGIN_BOTTOM: 14
  
  INPUT_GROUP_ADDON_COLOR: LiteralConstants['INPUT_COLOR']
  INPUT_GROUP_ADDON_BG: LiteralConstants['GRAY_200']
  INPUT_GROUP_ADDON_BORDER_COLOR: LiteralConstants['INPUT_BORDER_COLOR']
  
  FORM_FEEDBACK_MARGIN_TOP: LiteralConstants['FORM_TEXT_MARGIN_TOP']
  FORM_FEEDBACK_FONT_SIZE: LiteralConstants['FORM_TEXT_MARGIN_TOP']
  FORM_FEEDBACK_VALID_COLOR: LiteralConstants['THEME_COLORS']['SUCCESS']
  FORM_FEEDBACK_INVALID_COLOR: LiteralConstants['THEME_COLORS']['DANGER']
  
  // $form-feedback-icon-valid-color:    $form-feedback-valid-color !default;
  // $form-feedback-icon-valid:          url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>') !default;
  // $form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;
  // $form-feedback-icon-invalid:        url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>') !default;
  
  // INPUT_COLOR_ADDON_COLOR: INPUT_COLOR
  // INPUT_COLOR_ADDON_BG: GRAY_200
  // INPUT_COLOR_ADDON_BORDER_COLOR: INPUT_BORDER_COLOR
  
  // Navs
  
  NAV_LINK_PADDING_Y: 7
  NAV_LINK_PADDING_X: 14
  NAV_LINK_DISABLED_COLOR: LiteralConstants['GRAY_600']
  
  NAV_TABS_BORDER_COLOR: LiteralConstants['GRAY_300']
  NAV_TABS_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  NAV_TABS_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  // $nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;
  NAV_TABS_LINK_ACTIVE_COLOR: LiteralConstants['GRAY_700']
  // $nav-tabs-link-active-color:        $gray-700 !default;
  // $nav-tabs-link-active-bg:           $body-bg !default;
  // $nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;
  
  NAV_PILLS_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  // $nav-pills-link-active-color:       $component-active-color !default;
  // $nav-pills-link-active-bg:          $component-active-bg !default;
  
  NAV_DIVIDER_COLOR: LiteralConstants['GRAY_200']
  NAV_DIVIDER_MARGIN_Y: 7
  
  // Pagination
  
  PAGINATION_PADDING_Y: 7
  PAGINATION_PADDING_X: 10.5
  PAGINATION_PADDING_Y_SM: 3.5
  PAGINATION_PADDING_X_SM: 7
  PAGINATION_PADDING_Y_LG: 10.5
  PAGINATION_PADDING_X_LG: 21
  PAGINATION_LINE_HEIGHT: 1.25
  
  PAGINATION_COLOR: LiteralConstants['LINK_COLOR']
  PAGINATION_BG: LiteralConstants['WHITE']
  PAGINATION_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  PAGINATION_BORDER_COLOR: LiteralConstants['GRAY_300']
  
  PAGINATION_FOCUS_BOX_SHADOW_COLOR: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_COLOR']
  PAGINATION_FOCUS_BOX_SHADOW_OPACITY: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_OPACITY']
  PAGINATION_FOCUS_BOX_SHADOW_OFFSET: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_OFFSET']
  PAGINATION_FOCUS_BOX_SHADOW_RADIUS: LiteralConstants['INPUT_BTN_FOCUS_BOX_SHADOW_RADIUS']
  PAGINATION_FOCUS_OUTLINE: 0
  
  // not applicable
  // $pagination-hover-color:            $link-hover-color !default;
  // $pagination-hover-bg:               $gray-200 !default;
  // $pagination-hover-border-color:     $gray-300 !default;
  
  PAGINATION_ACTIVE_COLOR: LiteralConstants['COMPONENT_ACTIVE_COLOR']
  PAGINATION_ACTIVE_BG: LiteralConstants['COMPONENT_ACTIVE_BG']
  PAGINATION_ACTIVE_BORDER_COLOR: LiteralConstants['PAGINATION_ACTIVE_BG']
  
  PAGINATION_DISABLED_COLOR: LiteralConstants['GRAY_600']
  PAGINATION_DISABLED_BG: LiteralConstants['WHITE']
  PAGINATION_DISABLED_BORDER_COLOR: LiteralConstants['GRAY_300']
  
  // Cards
  
  CARD_SPACER_Y: 10.5
  CARD_SPACER_X: 17.5
  CARD_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  CARD_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  CARD_BORDER_COLOR: LiteralConstants['BORDER_COLOR']
  CARD_INNER_BORDER_RADIUS: number
  CARD_CAP_BG: string
  CARD_CAP_COLOR: null
  CARD_HEIGHT: null
  CARD_COLOR: null
  CARD_BG: LiteralConstants['WHITE']
  
  // OBSOLETED / CARD_SHADOW_COLOR: SHADOW_COLOR
  // OBSOLETED / CARD_SHADOW_OPACITY: SHADOW_OPACITY
  // OBSOLETED / CARD_SHADOW_OFFSET: SHADOW_OFFSET
  // OBSOLETED / CARD_SHADOW_RADIUS: CARD_BORDER_RADIUS
  
  CARD_IMG_OVERLAY_PADDING: 17.5
  
  CARD_GROUP_MARGIN: 10.5
  CARD_DECK_MARGIN: LiteralConstants['CARD_GROUP_MARGIN']
  
  CARD_COLUMNS_COUNT: 3
  CARD_COLUMNS_GAP: 17.5
  CARD_COLUMNS_MARGIN: LiteralConstants['CARD_SPACER_Y']
  
  // Toasts
  
  TOAST_MAX_WIDTH: 3
  TOAST_PADDING_X: 10.5
  TOAST_PADDING_Y: 3.5
  TOAST_FONT_SIZE: 12.25
  TOAST_COLOR: null
  TOAST_BACKGROUND_COLOR: string
  TOAST_BORDER_WIDTH: 1
  TOAST_BORDER_COLOR: string
  TOAST_BORDER_RADIUS: 3.5
  TOAST_BOX_SHADOW_COLOR: LiteralConstants['BLACK']
  TOAST_BOX_SHADOW_OPACITY: .1
  TOAST_BOX_SHADOW_OFFSET: { width: 0, height: 3.5}
  TOAST_BOX_SHADOW_RADIUS: 10.5
  TOAST_HEADER_COLOR: LiteralConstants['GRAY_600']
  TOAST_HEADER_BACKGROUND_COLOR: string
  TOAST_HEADER_BORDER_COLOR: string
  
  // Modals
  
  MODAL_INNER_PADDING: 14
  MODAL_DIALOG_MARGIN: 14
  // $modal-dialog-margin-y-sm-up: 30px,
  MODAL_TITLE_LINE_HEIGHT: LiteralConstants['LINE_HEIGHT_BASE']
  MODAL_CONTENT_BG: LiteralConstants['WHITE']
  MODAL_CONTENT_BORDER_COLOR: string
  MODAL_CONTENT_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  MODAL_CONTENT_BORDER_RADIUS: 12.6
  
  MODAL_CONTENT_SHADOW_COLOR: LiteralConstants['SHADOW_COLOR']
  MODAL_CONTENT_SHADOW_OPACITY: LiteralConstants['SHADOW_OPACITY']
  MODAL_CONTENT_SHADOW_OFFSET: { width: 0, height: 14 }
  MODAL_CONTENT_SHADOW_RADIUS: LiteralConstants['MODAL_CONTENT_BORDER_RADIUS']
  // $modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5)
  // $modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5)
  
  MODAL_BACKDROP_BG: LiteralConstants['BLACK']
  MODAL_BACKDROP_OPACITY: 0.5
  MODAL_HEADER_BORDER_COLOR: LiteralConstants['GRAY_200']
  MODAL_FOOTER_BORDER_COLOR: LiteralConstants['MODAL_HEADER_BORDER_COLOR']
  MODAL_HEADER_BORDER_WIDTH: LiteralConstants['MODAL_CONTENT_BORDER_WIDTH']
  MODAL_FOOTER_BORDER_WIDTH: LiteralConstants['MODAL_HEADER_BORDER_WIDTH']
  MODAL_HEADER_PADDING_X: 14
  MODAL_HEADER_PADDING_Y: 14
  // DROPPED / MODAL_HEADER_PADDING
  
  // $modal-lg:                    800px,
  // $modal-md:                    500px,
  // $modal-sm:                    300px,
  
  // $modal-transition:            transform .3s ease-out,
  
  // Alert
  
  ALERT_PADDING_Y: 10.5
  ALERT_PADDING_X: 17.5
  ALERT_MARGIN_BOTTOM: 14
  ALERT_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  ALERT_LINK_FONT_WEIGHT: LiteralConstants['FONT_WEIGHT_BOLD']
  ALERT_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  ALERT_BG_LEVEL: -10
  ALERT_BORDER_LEVEL: -9
  ALERT_COLOR_LEVEL: 6
  
  // Progress bars
  
  PROGRESS_HEIGHT: 14
  PROGRESS_FONT_SIZE: 10.5
  PROGRESS_BG: LiteralConstants['GRAY_200']
  PROGRESS_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  PROGRESS_BOX_SHADOW_COLOR: LiteralConstants['SHADOW_COLOR']
  PROGRESS_BOX_SHADOW_OFFSET: LiteralConstants['SHADOW_OFFSET']
  PROGRESS_BOX_SHADOW_OPACITY: .00625
  PROGRESS_BOX_SHADOW_RADIUS: LiteralConstants['PROGRESS_BORDER_RADIUS']
  PROGRESS_BAR_COLOR: LiteralConstants['WHITE']
  PROGRESS_BAR_BG: LiteralConstants['PRIMARY']
  PROGRESS_BAR_ANIMATION_TIMING: 'placeholder'
  PROGRESS_BAR_TRANSITION: 'placeholder'
  
  // List group
  
  LIST_GROUP_COLOR: null
  LIST_GROUP_BG: LiteralConstants['WHITE']
  LIST_GROUP_BORDER_COLOR: string
  LIST_GROUP_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  LIST_GROUP_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  
  LIST_GROUP_ITEM_PADDING_Y: 10.5
  LIST_GROUP_ITEM_PADDING_X: 17.5
  
  // RESERVED / LIST_GROUP_HOVER_BG: GRAY_100
  LIST_GROUP_ACTIVE_COLOR: LiteralConstants['COMPONENT_ACTIVE_COLOR']
  LIST_GROUP_ACTIVE_BG: LiteralConstants['COMPONENT_ACTIVE_BG']
  LIST_GROUP_ACTIVE_BORDER_COLOR: LiteralConstants['LIST_GROUP_ACTIVE_BG']
  
  LIST_GROUP_DISABLED_COLOR: LiteralConstants['GRAY_600']
  LIST_GROUP_DISABLED_BG: LiteralConstants['LIST_GROUP_BG']
  
  LIST_GROUP_ACTION_COLOR: LiteralConstants['GRAY_700']
  LIST_GROUP_ACTION_HOVER_COLOR: LiteralConstants['LIST_GROUP_ACTION_COLOR']
  
  LIST_GROUP_ACTION_ACTIVE_COLOR: LiteralConstants['BODY_COLOR']
  LIST_GROUP_ACTION_ACTIVE_BG: LiteralConstants['GRAY_200']
  
  // Image thumbnails
  
  THUMBNAIL_PADDING: 3.5
  THUMBNAIL_BG: LiteralConstants['BODY_BG']
  THUMBNAIL_BORDER_WIDTH: LiteralConstants['BORDER_WIDTH']
  THUMBNAIL_BORDER_COLOR: LiteralConstants['GRAY_300']
  THUMBNAIL_BORDER_RADIUS: LiteralConstants['BORDER_RADIUS']
  THUMBNAIL_BOX_SHADOW_COLOR: LiteralConstants['BLACK']
  THUMBNAIL_BOX_SHADOW_OPACITY: 0.75
  THUMBNAIL_BOX_SHADOW_OFFSET: {width: 0, height: 1}
  THUMBNAIL_BOX_SHADOW_RADIUS: 
  
  type2
  
  // Carousel
  
  CAROUSEL_CONTROL_COLOR: LiteralConstants['WHITE']
  CAROUSEL_CONTROL_WIDTH: '15%'
  CAROUSEL_CONTROL_OPACITY: .5
  CAROUSEL_CONTROL_HOVER_OPACITY: .9
  // CAROUSEL_CONTROL_TRANSITION: opacity .15s ease !default;
  
  CAROUSEL_INDICATOR_WIDTH: 30
  CAROUSEL_INDICATOR_HEIGHT: 3
  CAROUSEL_INDICATOR_HIT_AREA_HEIGHT: 10
  CAROUSEL_INDICATOR_SPACER: 3
  CAROUSEL_INDICATOR_ACTIVE_BG: LiteralConstants['WHITE']
  // CAROUSEL_INDICATOR_TRANSITION: opacity .6s ease !default;
  
  CAROUSEL_CAPTION_WIDTH: '70%'
  CAROUSEL_CAPTION_COLOR: LiteralConstants['WHITE']
  
  CAROUSEL_CONTROL_ICON_WIDTH: 20
  
  // CAROUSEL_CONTROL_PREV_ICON_BG: url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{CAROUSEL_CONTROL_color}' width='8' height='8' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>') !default;
  // CAROUSEL_CONTROL_NEXT-ICON_BG: url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{CAROUSEL_CONTROL_color}' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>') !default;

  // CAROUSEL_TRANSITION_DURATION: '6s'
  // CAROUSEL_TRANSITION: transform CAROUSEL_TRANSITION_DURATION ease-in-out
  
  // Close
  
  CLOSE_FONT_SIZE: 17.5
  CLOSE_FONT_WEIGHT: LiteralConstants['FONT_WEIGHT_BOLD']
  CLOSE_COLOR: LiteralConstants['BLACK']
  // CLOSE_TEXT_SHADOW: 0 1px 0 $white
  
  // Code
  
  CODE_FONT_SIZE: 12.25
  CODE_COLOR: LiteralConstants['PINK']
  
  KBD_PADDING_Y: 2.8
  KBD_PADDING_X: 5.6
  KBD_FONT_SIZE: LiteralConstants['CODE_FONT_SIZE']
  KBD_COLOR: LiteralConstants['WHITE']
  KBD_BG: LiteralConstants['GRAY_900']
  // not supported /  $kbd-box-shadow: inset 0 -.1rem 0 rgba($black, .25) !default;
  
  PRE_COLOR: LiteralConstants['GRAY_900']
  // $pre-scrollable-max-height:         340px !default;
  
  DISPLAYS: 'none' | 'flex'
  OVERFLOWS: 'visible' | 'hidden'
  POSITIONS: 'absolute' | 'relative'
}

declare type LiteralToType<T extends object> = {
  [Prop in keyof T]:
    T[Prop] extends string ? string :
    T[Prop] extends number ? number :
    T[Prop] extends boolean ? boolean :
    T[Prop] extends object ? LiteralToType<T[Prop]> :
    T[Prop]
}


// TODO: add all classNames of Bootstrap
// example: type ClassNames = ClassNamesMargin | ClassNamesPadding | ClassNamesHeading
export type ClassNames = 'text' | 'textCenter'

export type Constants = LiteralToType<LiteralConstants>
export type StylesProperties = StyleSheet.NamedStyles<{ [x: string] }>['']
export type ObjectClassNames = { [N in ClassNames]: StylesProperties }
export type Classes<T = {}> = { [K in keyof T]: StylesProperties }
export type Styles<T = {}> = { [K in ClassNames | keyof T]: StylesProperties }

export class BootstrapStyleSheet<T = {}> extends _BootstrapStyleSheet {
  constants: Constants
  c: Constants
  styles: Styles<T>
  s: Styles<T>
  classes: Classes<T>
  constructor (constants: Constants, classes: Styles<T>)
}

export const bootstrap: BootstrapStyleSheet
export const constants: LiteralConstants
export const styles: Styles
export const bss = bootstrap
export const c = constants
export const s = styles

export default BootstrapStyleSheet
