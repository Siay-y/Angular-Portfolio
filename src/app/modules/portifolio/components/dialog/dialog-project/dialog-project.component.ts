import { ChangeDetectionStrategy, Component, Inject, OnInit, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogProjectComponent implements OnInit{
  constructor(
    private dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects){}

    public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModel(){
    return this.dialogRef.close();
  }
}
