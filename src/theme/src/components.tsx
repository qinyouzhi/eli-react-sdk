import React from 'react';
import { outlinedInputClasses } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import {
  ArrowDropDownIcon,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  CheckIcon,
  CloseIcon,
  ErrorIcon,
  IndeterminateCheckBoxIcon,
  InfoIcon,
  RadioCheckedIcon,
  RadioIcon,
  WarningIcon,
} from 'fbm-ui';
import palette from './palette';

const placeholder = {
  color: 'rgba(0, 0, 0, 0.26)',
  opacity: 1,
};

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        WebkitFontSmoothing: 'antialiased',
      },
      body: {
        fontSize: 14,
        lineHeight: '22px',
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        '&.MuiAutocomplete-paper': {
          padding: '4px 0px',
        },
      },
      outlined: {
        border: '1px solid #EDEDED',
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        lineHeight: '1.2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        fontWeight: 400,
      },
      arrow: {
        color: 'rgba(0, 0, 0, 0.8)',
      },
    },
    defaultProps: {
      arrow: true,
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      labelPlacementStart: {},
      label: {
        fontSize: '14px',
        lineHeight: '22px',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder, // Firefox 19+
        '&:-ms-input-placeholder': placeholder, // IE 11
        '&::-ms-input-placeholder': placeholder, // Edge
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 30px white inset !important',
        },
      },
      inputAdornedStart: {
        paddingLeft: '0px !important',
      },
      inputAdornedEnd: {
        paddingRight: '0px !important',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: 'rgba(0,0,0,0.26)',
        top: '-2px',
        '&.Mui-focused': {
          top: '0px',
        },
        '&.MuiFormLabel-filled': {
          top: '0px',
        },
      },
      sizeSmall: {
        fontSize: 14,
        top: '-1px',
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: 'rgba(0,0,0,.56)',
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        '&:hover $notchedOutline': {
          borderColor: 'rgba(0,0,0,0.26)',
        },
        '&$focused $notchedOutline': {
          borderWidth: 1,
        },
        '&$disabled $notchedOutline': {
          borderColor: 'rgba(0,0,0,0.08)',
        },
        '&$disabled': {
          borderColor: 'rgba(0,0,0,0.08)',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'rgba(0,0,0,0.08)',
        },
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'rgba(0,0,0,0.26)',
        },
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: palette.primary.main,
          borderWidth: 1,
        },
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: palette.error.main,
        },
        [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'rgba(225,225,225,1)',
          backgroundColor: palette.action.disabledBackground,
        },
      },
      notchedOutline: {
        borderColor: '#EBEBEB',
      },
      inputSizeSmall: {
        paddingTop: 7,
        paddingBottom: 7,
        lineHeight: '22px',
        fontSize: '14px !important',
        minHeight: 22,
      },
      input: {
        lineHeight: '22px',
        padding: '13px 8px 13px 12px',
        minHeight: 24,
      },
      multiline: {
        padding: '0px',
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: ArrowDropDownIcon,
    },
    styleOverrides: {
      select: {},
      icon: {
        color: 'rgba(0, 0, 0, 0.56)',
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      popupIcon: <ArrowDropDownIcon />,
      noOptionsText: '无选项',
      clearIcon: <CloseIcon fontSize="small" />,
    },
    styleOverrides: {
      tag: {
        fontSize: '14px',
      },
      listbox: {
        padding: '0px',
      },
      popupIndicator: {
        color: 'rgba(0, 0, 0, 0.56)',
      },
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          paddingTop: 5,
          paddingBottom: 5,
          ' & .MuiAutocomplete-input': {
            minHeight: 16,
          },
        },
        '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
          padding: 2.5,
        },
      },
      clearIndicator: {
        padding: '2px',
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'text',
      color: 'inherit',
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {
          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
      {
        props: { variant: 'text', color: 'inherit' },
        style: {
          color: 'rgba(0, 0, 0, 0.56)',
          border: '1px solid transparent',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          fontWeight: '400',
          backgroundColor: 'white',
          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            borderColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'inherit' },
        style: {
          color: 'rgba(0, 0, 0, 0.86)',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    ],
    styleOverrides: {
      root: {
        boxShadow: 'none',
        fontSize: '14px',
        lineHeight: '22px',
        minWidth: 'unset',
      },
      sizeSmall: {
        padding: '0px 8px',
      },
      sizeMedium: {
        padding: '5px 16px',
      },
      sizeLarge: {
        padding: '9px 24px',
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRight: '1px solid rgba(0,0,0,0.04)',
          '&$disabled': {
            border: '1px solid rgba(0,0,0,0.04)',
            borderRight: 'none',
          },
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: 6,
        fontSize: '24px !important',
        '& svg': {
          width: 24,
          height: 24,
        },
        '&$disabled': {
          color: 'rgba(0,0,0,0.26)',
        },
      },
      sizeSmall: {
        padding: 6,
        fontSize: '18px !important',
        '& svg': {
          width: 18,
          height: 18,
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: '#576B95',
        textDecoration: 'none',
      },
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },

  MuiChip: {
    defaultProps: {
      size: 'medium',
    },
    styleOverrides: {
      sizeSmall: {
        height: '18px',
      },
      sizeMedium: {
        height: '24px',
        '& .MuiAvatar-root': {
          width: '18px',
          height: '18px',
          marginLeft: '3px',
          fontSize: '12px',
        },
        '& .MuiChip-deleteIcon': {
          width: '18px',
          height: '18px',
        },
        '& .MuiChip-avatar': {
          marginLeft: '3px',
        },
        '& .MuiChip-label': {
          fontSize: '12px',
        },
      },
      label: {
        fontSize: '14px',
        maxWidth: '360px',
      },
      labelSmall: {
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
  },

  MuiPopover: {
    styleOverrides: {
      paper: {
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
      },
    },
  },

  MuiPaginationItem: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: palette.primary.main,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
  },

  MuiCheckbox: {
    defaultProps: {
      indeterminateIcon: <IndeterminateCheckBoxIcon />,
      checkedIcon: <CheckBoxOutlineBlankIcon />,
      icon: <CheckBoxIcon />,
      color: 'primary',
    },
    styleOverrides: {
      root: {
        color: 'rgba(0, 0, 0, 0.26)',
        padding: 8,
      },
      indeterminate: {
        color: '#4caf50',
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      checkedIcon: <RadioCheckedIcon />,
      icon: <RadioIcon />,
      size: 'small',
    },
    styleOverrides: {
      root: {
        color: '#E3E3E3',
        padding: 8,
        '&>svg': {
          width: '24px !important',
          height: '24px !important',
        },
      },
      colorPrimary: {
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.16)',
        },
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      paperWidthXs: {
        maxWidth: 360,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: '8px 16px 8px 24px',
        backgroundColor: '#FFF',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        fontSize: '16px !important',
        fontWeight: 500,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '8px 16px 8px 24px',
        paddingTop: '8px !important',
        '&:first-child': {
          paddingTop: '20px !important',
        },
      },
      dividers: {
        borderTop: '1px solid #E3E3E3',
        borderBottom: '1px solid #E3E3E3',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        backgroundColor: '#FFF',
        height: 64,
        padding: 16,
      },
    },
  },

  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: '#FAFAFA',
      },
    },
  },
  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        color: '#7C7C7C',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        height: '66px',
        backgroundColor: '#ffffff',
        '&:nth-of-type(even)': {
          backgroundColor: '#FAFAFA',
        },
        '&$selected': {
          backgroundColor: '#e8f5e9',
          '&:hover': {
            backgroundColor: '#ECF7ED !important',
          },
        },
        '&:hover': {
          backgroundColor: '#f4f4f4 !important',
        },
      },
      head: {
        height: 54,
        background: '#FAFAFA',
        '&:hover': {
          backgroundColor: '#FAFAFA !important',
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: '1px solid #f4f4f4',
      },
      head: {
        fontWeight: '500',
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.56)',
        lineHeight: '22px',
      },
    },
  },

  MuiTab: {
    styleOverrides: {
      root: {
        padding: '17px 16px',
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.04)',
        },
      },
      textColorInherit: {
        opacity: 1,
        '&.Mui-selected': {
          color: '#4caf50',
        },
      },
    },
  },

  MuiAlert: {
    defaultProps: {
      iconMapping: {
        error: <ErrorIcon />,
        info: <InfoIcon />,
        success: <CheckIcon />,
        warning: <WarningIcon />,
      },
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 4,
        margin: 8,
      },
      standardWarning: {
        backgroundColor: 'rgba(245,196,65,0.26)',
        border: '1px solid rgb(245,196,65)',
      },
      standardError: {
        backgroundColor: 'rgb(255,108,108,0.26)',
        border: '1px solid rgb(255,108,108)',
      },
      standardSuccess: {
        backgroundColor: 'rgb(0,217,157,0.26)',
        border: '1px solid rgb(0,217,157)',
      },
      standardInfo: {
        backgroundColor: 'rgb(61,160,245,0.26)',
        border: '1px solid rgb(61,160,245)',
      },
    },
  },

  MuiList: {
    styleOverrides: {
      padding: { paddingTop: 4, paddingBottom: 4 },
    },
  },
  MuiListSubheader: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        lineHeight: 'unset',
        height: '24px',
        color: 'rgba(0,0,0,0.56)',
        backgroundColor: '#f5f5f5',
      },
      sticky: {
        backgroundColor: '#f5f5f5',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingTop: '7px',
        paddingBottom: '7px',
        '&$disabled': {
          opacity: 1,
          color: 'rgba(0,0,0,0.26)',
        },
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      multiline: {
        marginTop: 'unset',
        marginBottom: 'unset',
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: 'currentColor',
        minWidth: '24px !important',
        marginRight: 12,
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: '7px',
        paddingBottom: '7px',
      },
    },
  },

  MuiStepper: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        color: 'rgb(183,183,183)',
      },
    },
  },
  MuiStepContent: {
    styleOverrides: {
      root: {
        borderWidth: '2px',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      lineVertical: {
        borderLeftWidth: '2px',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      },
      vertical: {
        paddingBottom: '8px',
      },
    },
  },

  MuiAccordion: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          backgroundColor: 'white',
        },
      },
    },
  },

  MuiSkeleton: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
};

export default components;
