import { Model, DataTypes, BuildOptions } from 'sequelize';
import sequelize from '../sequelize/connection';
import { Part as tPart } from '../types/graphql.generated';
import { MacroProductModel } from '../macro-product';

class Part extends Model implements tPart {
  public id!: number;
  public name!: string;
  public thumb?: string;
  public subparts?: tPart[];
  public manual?: string;
  public drawings?: string;
}

Part.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manual: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drawings: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'part',
    freezeTableName: true,
    tableName: 'parts',
    timestamps: false,
  },
);

Part.belongsToMany(Part, {
  through: { model: MacroProductModel },
  as: 'subparts',
  foreignKey: 'parentPartNo',
  otherKey: 'childPartNo',
});

export type PartModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Part;
};

export default Part as PartModelStatic;
