class CreateSortedArrays < ActiveRecord::Migration
  def change
    create_table :sorted_arrays do |t|
      t.string :raw_array
      t.integer :numStepsBubble
      t.integer :numStepsMerge
      t.integer :numStepsQuick
      t.integer :numStepsMergeNat

      t.timestamps
    end
  end
end
