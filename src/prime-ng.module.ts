import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { DataViewModule } from 'primeng/dataview';
import { GMapModule } from 'primeng/gmap';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { MessageService, TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { DragDropModule } from 'primeng/dragdrop';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { CaptchaModule } from 'primeng/captcha';
import { ChipModule } from 'primeng/chip';
import { InplaceModule } from 'primeng/inplace';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { DeferModule } from 'primeng/defer';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { FilterService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TreeSelectModule,
    TriStateCheckboxModule,
    SplitButtonModule,
    SpeedDialModule,
    DataViewModule,
    GMapModule,
    OrderListModule,
    OrganizationChartModule,
    PaginatorModule,
    PickListModule,
    TableModule,
    TimelineModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule,
    HttpClientModule,
    MenuModule,
    BreadcrumbModule,
    ContextMenuModule,
    DockModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    SlideMenuModule,
    StepsModule,
    TabMenuModule,
    TieredMenuModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CarouselModule,
    GalleriaModule,
    DragDropModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BlockUIModule,
    CaptchaModule,
    ChipModule,
    InplaceModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule,
    TerminalModule,
    DeferModule,
    FocusTrapModule,
    StyleClassModule,
    RippleModule,
    AutoCompleteModule,
    DropdownModule,
    MultiSelectModule,
  ],
  providers: [
    FilterService,
    ConfirmationService,
    MessageService
  ]
})
export class PrimeNGModule { }
