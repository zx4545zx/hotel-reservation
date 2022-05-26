require "test_helper"

class ListPackageEquipmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_package_equipment = list_package_equipments(:one)
  end

  test "should get index" do
    get list_package_equipments_url, as: :json
    assert_response :success
  end

  test "should create list_package_equipment" do
    assert_difference("ListPackageEquipment.count") do
      post list_package_equipments_url, params: { list_package_equipment: { equipments_id: @list_package_equipment.equipments_id, packages_id: @list_package_equipment.packages_id, value: @list_package_equipment.value } }, as: :json
    end

    assert_response :created
  end

  test "should show list_package_equipment" do
    get list_package_equipment_url(@list_package_equipment), as: :json
    assert_response :success
  end

  test "should update list_package_equipment" do
    patch list_package_equipment_url(@list_package_equipment), params: { list_package_equipment: { equipments_id: @list_package_equipment.equipments_id, packages_id: @list_package_equipment.packages_id, value: @list_package_equipment.value } }, as: :json
    assert_response :success
  end

  test "should destroy list_package_equipment" do
    assert_difference("ListPackageEquipment.count", -1) do
      delete list_package_equipment_url(@list_package_equipment), as: :json
    end

    assert_response :no_content
  end
end
