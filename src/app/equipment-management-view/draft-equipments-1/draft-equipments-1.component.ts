import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { TeacherInventoryType } from '../../models/teacher-inventory-list/teacher-inventory-type';
import { TeacherInventoryListService } from '../../services/teacher-inventory-list.service';

@Component({
  selector: 'app-draft-equipments-1',
  imports: [IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxCategoryChartModule, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './draft-equipments-1.component.html',
  styleUrls: ['./draft-equipments-1.component.scss']
})
export class DRAFTEquipments1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public teacherInventoryListTeacherInventory: TeacherInventoryType[] = [];

  constructor(
    public teacherInventoryListService: TeacherInventoryListService,
  ) {}


  ngOnInit() {
    this.teacherInventoryListService.getTeacherInventory().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.teacherInventoryListTeacherInventory = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
