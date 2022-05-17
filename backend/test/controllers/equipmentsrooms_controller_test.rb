require "test_helper"

class EquipmentsroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @equipmentsroom = equipmentsrooms(:one)
  end

  test "should get index" do
    get equipmentsrooms_url, as: :json
    assert_response :success
  end

  test "should create equipmentsroom" do
    assert_difference("Equipmentsroom.count") do
      post equipmentsrooms_url, params: { equipmentsroom: { name: @equipmentsroom.name, price: @equipmentsroom.price } }, as: :json
    end

    assert_response :created
  end

  test "should show equipmentsroom" do
    get equipmentsroom_url(@equipmentsroom), as: :json
    assert_response :success
  end

  test "should update equipmentsroom" do
    patch equipmentsroom_url(@equipmentsroom), params: { equipmentsroom: { name: @equipmentsroom.name, price: @equipmentsroom.price } }, as: :json
    assert_response :success
  end

  test "should destroy equipmentsroom" do
    assert_difference("Equipmentsroom.count", -1) do
      delete equipmentsroom_url(@equipmentsroom), as: :json
    end

    assert_response :no_content
  end
end
