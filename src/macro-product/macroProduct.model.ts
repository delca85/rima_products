import { Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from '../sequelize/connection';
import { MacroProduct as tMacroProduct } from '../types/graphql.generated';
import { PartModel } from '../part';

class MacroProduct extends Model implements tMacroProduct {
  public id!: number;
  public childPartNo!: number;
  public parentPartNo!: number;
  public quantity!: number;
}

MacroProduct.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    childPartNo: {
      field: 'child_part_no',
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: PartModel,
        key: 'id',
      },
    },
    parentPartNo: {
      field: 'parent_part_no',
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: PartModel,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: 'macro_products',
    timestamps: false,
  }
);

export type MacroProductModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): MacroProduct;
};

export default MacroProduct as MacroProductModelStatic;
