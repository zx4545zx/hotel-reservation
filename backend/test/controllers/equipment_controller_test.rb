require "test_helper"

class EquipmentControllerTest < ActionDispatch::IntegrationTest
  setup do
    @equipment = equipment(:one)
  end

  test "should get index" do
    get equipment_index_url, as: :json
    assert_response :success
  end

  test "should create equipment" do
    assert_difference("Equipment.count") do
      post equipment_index_url, params: { equipment: { name: @equipment.name, price: @equipment.price } }, as: :json
    end

    assert_response :created
  end

  test "should show equipment" do
    get equipment_url(@equipment), as: :json
    assert_response :success
  end

  test "should update equipment" do
    patch equipment_url(@equipment), params: { equipment: { name: @equipment.name, price: @equipment.price } }, as: :json
    assert_response :success
  end

  test "should destroy equipment" do
    assert_difference("Equipment.count", -1) do
      delete equipment_url(@equipment), as: :json
    end

    assert_response :no_content
  end
end
